testCount=300
var ObjectId = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var gateArray = [
  "Regression",
  "Smoke",
  "Security",
  "Visual Regression"
];

var RiskArray = [
  "High",
  "Medium",
  "Low"
];

function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var result = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		result += chars.substring(rnum,rnum+1);
	}
	return result;
}


var start = new Date();
testData = {
    "gateName" : "as",
    "testName" : "as",
    "Risk" : "21",
    "description" : "3",
    "failureCount" : "1",
    "lastUpdated" : new Date('December 17, 1995 03:24:00'),
    "__v" : 0,
    "images" : [ 
        "DemoFAIL.png",
		"DemoFAIL1.png"
    ]
};



for(var j=0;j<testCount;j++)
{
	MongoClient.connect(url, function(err, db) 
	{
		var dbo = db.db("CentralizedDashboard");
		id = new ObjectId();
		testData._id=id;
		testData.gateName=gateArray[Math.floor(Math.random()*gateArray.length)];
		testData.testName = gateArray[Math.floor(Math.random()*gateArray.length)] + "_" + randomString();	
		testData.Risk=RiskArray[Math.floor(Math.random()*RiskArray.length)];
		testData.description = randomString();	
		testData.failureCount = Math.floor(Math.random() * 10);   
		dbo.collection("quarantines").insertOne(testData, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted");
			db.close();
	});
	});
}
var time = new Date() - start;