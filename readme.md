<h1 align="center">
	Hebrides <br>
	<a href="http://badge.fury.io/js/hebrides"><img src="https://badge.fury.io/js/hebrides.svg" alt="npm version" height="18"></a>
	<a href="https://travis-ci.org/quarterto/Hebrides"><img src="https://travis-ci.org/quarterto/Hebrides.svg" alt="build status" height="18"></a>
</h1>

Helper for creating pluggable module APIs

```js
var use = require('hebrides');
var api = {
  foo() {
    return 'hello';
  },
  use
};

var api2 = api.use({
  bar(obj, a) {
    return obj.foo() + ' world' + a;
  }
});

typeof api.bar //⇒ "undefined"
api2.bar('!') //⇒ "hello world!"
```

## Licence
MIT
