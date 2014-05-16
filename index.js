module.exports.parseString = function (string) {
	var stringNums = string.split(" ");
	stringNums = stringNums.map(function(e){ return parseInt(e); });
	return stringNums;
};

module.exports.add = function(x, y) {
	return x + y;
};

module.exports.subtract = function(x, y) {
	return x - y;
};

module.exports.div = function(x, y) {
	return x / y;
};

module.exports.multi = function(x, y) {
	return x * y;
};

module.exports.compares = function (x) {
	return x;
};

