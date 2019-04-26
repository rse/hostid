/*!
**  HostId -- Determine Universally Unique Identifier of Host
**  Copyright (c) 2016-2019 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  external requirements  */
var os   = require("os")
var UUID = require("pure-uuid")

/*  cached host UUID  */
var hostid = null

/*  determine UUID of host  */
var getHostId = function () {
    /*  if still not present, initially determine id of host...  */
    if (hostid === null) {

        /*  iterate over all network interfaces...  */
        var ifaces = os.networkInterfaces()
        var macs = {}
        Object.keys(ifaces).forEach(function (ifname) {
            /*  skip some well-known virtual interfaces  */
            if (ifname.match(/^(?:lo|tun|tap)/i))
                return

            /*  iterate over all network sub-interfaces...  */
            ifaces[ifname].forEach(function (iface) {
                /*  skip internal interfaces  */
                if (iface.internal)
                    return

                /*  remember IEEE MAC address  */
                if (iface.mac)
                    macs[iface.mac] = true
            })
        })

        /*  determine UUIDv5 payload  */
        var payload
        macs = Object.keys(macs)
        if (macs.length > 0) {
            /*  strategy 1 (hardware): use (first) IEEE MAC address  */
            if (macs.length > 1)
                macs = macs.sort()
            payload = macs[0]
        }
        else {
            /*  strategy 2 (software): use a host fingerprint  */
            payload = os.arch() + os.endianness() + os.platform() + os.hostname()
        }

        /*  generate UUIDv5-based host id  */
        var uuid_ns = new UUID(5, "ns:URL", "urn:hostid")
        var uuid = new UUID(5, uuid_ns, payload)
        hostid = uuid.format()
    }
    return hostid
}

/*  export the API function  */
module.exports = getHostId

