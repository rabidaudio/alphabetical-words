
var fs = require('fs');

var Lazy = require('lazy');

var u = require('underscore');

var output = fs.createWriteStream('out.txt');

var dictionaries = ['corncob_lowercase.txt', 'wordsEn.txt']; //'dictionary.txt'

dictionaries.forEach(function(d){
  new Lazy(fs.createReadStream( d )).lines.forEach(function(word){
    word = word.toString();
    if(isAlphabetical(word)){
      output.write(word+"\n");
      console.log(word, "is alphabetical");
    }
  });
});


function isAlphabetical(word){
  return u.isEqual(word, sorted(word));
}

function sorted(arr){
  return arr.split("").sort().join("");
}