var fs = require("fs");
var readline = require('readline');
var sys = require('sys');
var Stdin = process.openStdin();
Stdin.addListener("data",function(d)
{
	//console.log("You typed : [" + d.toString().substring(0, d.length-1) + "]");
	 var newRequest = require ('supertest');

	 newRequest('https://maps.googleapis.com')
	 .get('/maps/api/geocode/json?address='+d+'&key=AIzaSyDQOZhJhi30Q5o-NY6Ryg7F7Ku--N6VCvo')
	 .send()
	 .expect(200)
	 .end(function(err,res)
	 {
	 	if(err)
	 	{
	 		console.log("Error Message :" + err);
	 	}
	 	else
	 	{
	 		//console.log("Server Response is :" +JSON.stringify(res.body.results[0],null,4));
	 		//console.log(res.body.status);
	 		if(res.body.status == "OK")
	 		{
 			console.log(res.body.results[0].geometry.location);
 			var lat1 = res.body.results[0].geometry.location.lat;
 			var lng1 = res.body.results[0].geometry.location.lng;
 			
 			var date = new Date();
 			//var time = date.getHours();

 			newRequest('https://api.forecast.io')
 			.get('/forecast/2e2cb86bc3f558adb86126f1a4cb8b23/'+lat1 +','+lng1)
 			.send()
 			.expect(200)
 			.end(function(err1,res_weather)
 			{
 				if(err1)
 				{
 					console.log("Error Message :" + err1);
 				}
 				else
 				{
 					var current_weather = res_weather.body.currently;
 					var wheniwritetofile = 
 					{
 						"date" 	    : date,
 						"Latitude"  : lat1,
 						"Longitude" : lng1,
 						"Current Weather" : current_weather
 					}
 					console.log(JSON.stringify(res_weather.body.currently,null,4));
 					console.log("Date is :" + date);
 					fs.appendFile("finalassi3.txt",JSON.stringify(wheniwritetofile,null,4),function(err2)
 					{
 						if(err2)
 						{
 							console.log("Error message :" + err2);
 						}
 						else
 						{
 							console.log("Appended to file");
 						}
 					})
 					
 				}
 			})
 			}
 			else
 			{
 				console.log("No such location found");
 			}
	 	}
	 		// else
	 		// {
	 		// 	console.log('No such location found');
	 		// }
	 		
	})
	 
});

