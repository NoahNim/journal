export function Entry(input){
  this.input = input;
  this.inputArray = input.split(" ");
}

Entry.prototype.counter = function() {
  var userInputArray = this.inputArray;
  var inputLength = userInputArray.length;
  return inputLength;
}

Entry.prototype.vorc = function() {
  var userInputArray = this.inputArray;
  var numberOfVowels = 0;

  userInputArray.forEach(function(letter) {
    if (letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u"||letter=="A"||letter=="E"||letter=="I"||letter=="O"||letter=="U") {
      numberOfVowels += 1;
      console.log(numberOfVowels);
    }
  });
  return numberOfVowels;
}
