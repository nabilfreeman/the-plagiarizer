var summary = require("node-summary");
var async = require("async");

var title = "poo";
var content = "Charter Communications is closing in on a deal to acquire Time Warner Cable, according to Bloomberg. The proposed deal would see Charter paying $195 a share in cash and stock to purchase Time Warner Cable — which is currently valued at $48 billion. This is the fourth time in the last three years Charter has attempted to purchase Time Warner Cable. Last year's $37 billion offer was perceived as a below market deal by Time Warner Cable, and was ultimately turned down in favor of Comcast's $45 billion offer. But after that merger fell through, Time Warner Cable made it known it was open to a potential deal with Charter. Bright House Networks, which Charter agreed to purchase for $10.4 billion before Comcast's acquisition of Time Warner Cable fell through (the acquisition was contingent on the Comcast deal going through), will also be included in the new conglomerate, according to Bloomberg. The merger of Charter, Time Warner Cable, and Bright House Networks would create a company controlling cable and internet for about 20 million subscribers. While it doesn't approach the 30 million subscribers the Comcast-Time Warner Cable combination would have covered — with that many subscribers under the control of one company — scrutiny from the Federal Communications Commission and the Department of Justice may not be far behind.";

var sentences = content.split(".");

// sentences.forEach(function(sentence){
// 	summary.summarize("", sentence, function(err, summary) {
// 	    if(err) console.log("Something went wrong man!");
	 
// 	    console.log(summary);
	 
// 	    // console.log("Original Length " + (title.length + content.length));
// 	    // console.log("Summary Length " + summary.length);
// 	    // console.log("Summary Ratio: " + (100 - (100 * (summary.length / (title.length + content.length)))));
// 	});
// });



async.eachSeries(
	sentences, 
	function(sentence, iterator) {
		console.log(sentence);
		summary.summarize("", sentence, function(err, summary) {
		    if(err) console.log("Something went wrong man!");
		 
		    console.log(summary);

		    iterator();
		 
		    // console.log("Original Length " + (title.length + content.length));
		    // console.log("Summary Length " + summary.length);
		    // console.log("Summary Ratio: " + (100 - (100 * (summary.length / (title.length + content.length)))));
		});
	}, function(err){
		console.log("done");
	}
);
