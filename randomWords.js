// 05 random words //

var array = ["Tom Nook", "is", "not", "the", "villain", "cake", "iPhones", "are", "cool"];
var randomIndex = Math.floor(Math.random() * array.length);
var randomIndex2 = Math.floor(Math.random() * array.length);
var randomIndex3 = Math.floor(Math.random() * array.length);
var randomIndex4 = Math.floor(Math.random() * array.length);
var randomIndex5 = Math.floor(Math.random() * array.length);

console.log("The sentence:");
console.log(array[randomIndex] + " " + array[randomIndex2] + " " + array[randomIndex3] + " " + array[randomIndex4] + " " + array[randomIndex5]);
