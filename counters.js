var fs1 = require("fs");
var counts = 0;
fs1.watchFile("hello2.txt",function(c,p)
{
	counts++ ;
	console.log('Counter is :' + counts);
});