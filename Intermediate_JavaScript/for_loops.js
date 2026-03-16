// for loop used when you know exactly how many times you want a piece of code run
var output = [];
function fizzBuzz() {
  for (var number=1;number<101;number++) {
    if(number % 3 ===0 && number % 5 ===0){
      output.push("FizzBuzz");
    }else {
      if(number % 3===0){
        output.push("Fizz");
      }else {
        if(number % 5 ===0){
          output.push("Buzz");
        } else {
          output.push(number);
        }
      }
    }
  }
  console.log(output);
}

fizzBuzz()