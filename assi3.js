var readline = require('readline');
var sys = require('sys');
var Stdin = process.openStdin();
Stdin.addListener("data",function(d)
{
	console.log(d.toString());
	//console.log("You typed : [" + d.toString().substring(0, d.length-1) + "]"); 
})