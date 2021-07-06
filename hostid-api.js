/*!
**  HostId -- Determine Universally Unique Identifier of Host
**  Copyright (c) 2016-2021 Dr. Ralf S. Engelschall <rse@engelschall.com>
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
        /*  determine host fingerprint  */
        var fingerprint = os.cpus().length + os.arch() + os.platform() + os.hostname()

        /*  generate UUIDv5-based host id  */
        var uuid_ns = new UUID(5, "ns:URL", "urn:hostid")
        var uuid = new UUID(5, uuid_ns, fingerprint)
        hostid = uuid.format()
    }
    return hostid
}

/*  export the API function  */
module.exports = getHostId

