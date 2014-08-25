var fs = require("fs");
	fs.appendFile("hello.txt","Hello World\n",function(err)
	{
		if (err) 
		{
			console.log(err);
		}
		else
		{
			
			console.log('Hello World added');
			
		}
});