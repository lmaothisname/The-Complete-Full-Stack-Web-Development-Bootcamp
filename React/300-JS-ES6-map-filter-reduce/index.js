import emojipedia from "./emojipedia.js";

const newArray = emojipedia.map(function(emoji) {
  return emoji.meaning.length > 100 ? emoji.meaning.slice(0,100) : emoji.meaning;
})

console.log(newArray);