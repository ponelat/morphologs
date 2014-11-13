/* global $: false */
// letters  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var consonants = [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a','e','i','o','u'];
var common_words = ['time', 'person', 'year', 'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place', 'work', 'week', 'case', 'point', 'government', 'company', 'number', 'group', 'problem', 'fact'] ;

// functions
/**
 * wrap each letter in a <span> tag
 * @param: {string}  word word to be wrapped
 * @returns: {string}     wrapped up with tags
 */
function spanned_out(word) {
 if (typeof word !== 'string') {
   return null;
 }

 var _class = 'letter';
 var tag = 'a';
 var opening = '<'+tag+' href="#" class ="' + _class + '">';
 var closing = '</'+tag+'>';

 // Wrap each letter in a span tag
 var str = opening + word[0] + closing + opening;
 str += word.slice(1).split('').join(closing + opening);
 str += closing;
 
 return str;
}

/*
 * random index
 * @param: {number} i
 * @return: {number} a random int, up to i
 */
function random(i) {
  return Math.floor((Math.random() * i));
}

function random_vowel() {
  return vowels[random(5)]; // five vowels
}

function random_consonant() {
  return consonants[random(21)]; // there are 21 consonants
}

/**
 * return a random vowel or consonant depending on argument
 */
function swap_letter(l) {
  return (vowels.indexOf(l.toLowerCase()) > -1) ? random_vowel() : random_consonant();
}


function random_word() {
  return common_words[random(common_words.length)];
}
// live code
$(function(){

 // inject word, with each letter wrapped in a span tag 
 $('#theword')
   .html(spanned_out(random_word()))
   .addClass('letter-hl');

 $('.letter')
   .click(function(e) {
     e.preventDefault();
     var $lett = $(e.target);
     var l = $lett.text();
     $lett.text(swap_letter(l));
     return;
   });
});

