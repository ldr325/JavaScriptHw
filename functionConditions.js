// 04 function conditions //

function bugs(num){
  if (num == 1){
    return "One beetle";
  }
  else if (num == 2){
    return "look a lobster";
  }
  else if (num == 3){
    return "just a stick";
  }
  else {
    return "Run it's a scorpion"
  }
}

console.log("Whats under the rock?")
console.log(bugs(1));
console.log(bugs(2));
console.log(bugs(3));
console.log(bugs(15));
