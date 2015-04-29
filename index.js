var extend = require('xtend');
var mapObj = require('lodash.mapvalues');

function method(fn) {
	return function() {
		return fn.apply(this, [this].concat([].slice.call(arguments)));
	};
};

function fnsToMethod(x) {
	return typeof x === 'function' ? method(x) : x;
}

module.exports = method(function use(dest, src) {
	return mapObj(extend(dest, src, {use: use}), fnsToMethod);
});
