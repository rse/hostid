
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
Identifier (UUID) of a Host, based its IEEE MAC address (or as a
fallback based on a fingerprint of its platform parameters).

Getting HostId
--------------

```
$ npm install [-g] hostid
```

Using HostId
------------

```shell
$ hostid
```

```js
var HostId = require("hostid")
var hostid = HostId()
```

License
-------

Copyright (c) 2016 Ralf S. Engelschall (http://engelschall.com/)

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

