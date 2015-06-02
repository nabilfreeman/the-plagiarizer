var thesaurus = require("thesaurus");

console.log(thesaurus);

var get = function(phrase){

	var words = phrase.split(" ");
	var output = [];

	words.forEach(function(word){
		var synonyms = thesaurus.find(word);

		if(synonyms.length === 0){
			output.push(word);
		} else {
			output.push(synonyms[0]);
		}
	});

	return output.join(" ");

	
}

// console.log(get("The result in Table 4.5.1 shows that commitment has a positive association with customer satisfaction (Pearson’s r = 0.431, sig-value < 0.01) and customer loyalty (Pearson’s =0.473, sig-value <0.01), and also that commitment has a greater effect on customer loyalty than it does on customer satisfaction in the context of estate agencies in Newcastle. Ndubisi (2007) suggests that commitment could be considered as a useful underpinning for evaluating customer loyalty, because highly committed customers tend to maintain a long-term benefit relationship with firms, and as a result of their loyalty they are treasured communicators of positive word-of-mouth about their service providers. The result (Table 4.5.1) also describes that customer commitment in Newcastle estate agencies appears to be the single greatest impact on customer loyalty out of these four underpinnings. Fullerton (2005) supports this, saying that integrating commitment can enrich customer loyalty."));