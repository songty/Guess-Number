var chai = require('chai');
var expect = chai.expect;

var _ = require('../index');

// describe('add', function() {
// 	it('adds', function () {
// 		expect(_.add(1,5)).to.eql(6);
// 	});
// });

// describe('subtract', function() {
// 	it('adds', function () {
// 		expect(_.subtract(10,5)).to.eql(5);
// 	});
// });

// describe('divide', function() {
// 	it('adds', function () {
// 		expect(_.div(200,5)).to.eql(40);
// 	});
// });
// describe('multiply', function() {
// 	it('multiply', function () {
// 		expect(_.multi(5,5)).to.eql(25);
// 	});
// });

//Testing for number > or <
describe('Greater than', function() {
	it('compares', function () {
		expect(_.compares(20)).to.be.above(5);
	});
});