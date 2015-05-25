//patching prototypes. #yolo
//patch array
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

//patch string
if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
      return this.replace(rtrim, '');
    };
  })();
}



var textarea = document.querySelector("textarea");

var button = document.querySelector("#plagiarize");
button.addEventListener("click", function(e){
    //split the contents of the textarea into an array of words.
    var textarea_contents = textarea.value.trim().replace(/ +/g, " ").replace(/\n+/g, "\n").split(" ");

    var new_contents = [];

    textarea_contents.forEach(function(word){
        
            if(word[0] === word[0].toUpperCase()){
                new_contents.push(word);
                return;
            }

            var synonyms = getSynonyms(word);
            var synonyms_length = synonyms.length;

            if(synonyms_length === 0){
                //push original word
                new_contents.push(word);
            } else {

                var index = Math.floor(Math.random() * synonyms_length);

                //push a random synonym
                console.log(word, synonyms[index]);
                new_contents.push(synonyms[index]);
            }
    });

    //write new contents to textarea
    textarea.value = new_contents.join(" ");
});

var getSynonyms = function(word){
    var _ref;
    return (_ref = window._THESAURUS[word]) != null ? _ref : [];
}

//load workouts
var httpCallback = function(){
    window._THESAURUS = JSON.parse(this.responseText);
};

var httpRequest = new XMLHttpRequest();
httpRequest.onload = httpCallback;
httpRequest.open("get", "/js/dataset_2.json", true);
httpRequest.send();