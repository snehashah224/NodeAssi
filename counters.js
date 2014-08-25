var fs1 = require("fs");
var counts = 0;
fs1.watchFile("assi2.js",function(filename)
{
	counts++ ;
	console.log('Counter is :' + counts);
});