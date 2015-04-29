var expect = require('chai').use(require('sinon-chai')).use(require('dirty-chai')).expect;
var sinon = require('sinon');

var use = require('./index.js');

describe('Hebrides', function() {
	it('should add properties immutably', function() {
		var o = {};
		var r = use.call(o, {foo: 'bar'});
		expect(o).not.to.have.property('foo');
		expect(r).to.have.property('foo', 'bar');
	});

	it('should methodise functions', function() {
		var f = sinon.spy();
		var r = use.call({}, {foo: f});
		r.foo(1, 2, 3);
		expect(f).to.have.been.calledWith(r, 1, 2, 3);
	});

	it('should attach use for chaining', function() {
		var r = use.call({}, {});
		expect(r.use).to.be.a('function');
		var s = r.use({foo: 'bar'});
		expect(s).to.have.property('foo', 'bar');
	});
});
