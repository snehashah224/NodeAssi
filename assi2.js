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
		fs.readFile('hello2.txt', 'utf8',function(err,data)
		{
			if(err)
			{
				 throw err;
			}
			else
			{
				var file_array = data.split('\n');
				for (var i=0;i<file_array.length;i++)
				{
				 	console.log(file_array[i]);
				}
				var counts= file_array.length-1;
				console.log('Application run number :', + counts);
			}
		});
	}
});