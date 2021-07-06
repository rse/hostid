
HostId
======

**Determine Universally Unique Identifier (UUID) of Host**

<p/>
<img src="https://nodei.co/npm/hostid.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/hostid.png" alt=""/>

Abstract
--------

This is a small Node module for determining the Universally Unique
Identifier (UUID) of a host, based on a simple fingerprint derived from
the number of CPUs, the CPU architecture, the operating system name, and
the host name. As long as those fingerprint sources do not change, the
resulting host UUID will not change, too.

Getting HostId
--------------

```
$ npm install [-g] hostid
```

Using HostId
------------

```shell
# Unix shell
$ hostid=`hostid`
$ echo "Host Id: $hostid"
```

```js
# Node program
import HostId from "hostid"
let hostid = HostId()
console.log(`Host Id: ${hostid}`)
```

License
-------

Copyright (c) 2016-2021 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

