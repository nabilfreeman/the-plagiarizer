var fs = require("fs");

var master = [
  ["because", "for the reason that", "on the grounds that", "as a result of"],
  ["that", "in order that", "so that", "in that"],
  ["could", "may", "might"],
  ["with", "alongside", "amidst", "beside", "along with", "together with"],
  ["also", "furthermore", "additionally", "on top of"],
  ["which", "that"],
  ["that", "which"],
  ["these", "the aforementioned"]
];

var output_object = {};

//for each group...
//make enough objects such that...
//each group member is a key...
//with an array of the other group members as a value

//the benefit of this is extremely fast lookups on the front-end, and the ability to randomize everything repeatedly.
master.forEach(function(group){
  group.forEach(function(word){

    output_object[word] = [];

    group.forEach(function(other_word){
      if(other_word !== word) output_object[word].push(other_word);
    });

  });
});

var file_path = process.cwd() + "/site/js/thesaurus_data.json";
fs.writeFileSync(file_path, JSON.stringify(output_object));