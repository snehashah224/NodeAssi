var ranWords = require ('random-words');
var fs = require("fs");
fs.appendFile("hello2.txt",ranWords()+'\n',function(err)
{
	if (err) 
	{
		console.log(err);
	}
	else
	{
		console.log('Random Words added');
			
	}
});