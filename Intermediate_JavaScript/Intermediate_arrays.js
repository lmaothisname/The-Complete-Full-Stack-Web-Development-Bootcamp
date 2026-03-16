var output = [];
var array = [];
// to add an element to the arry use .push() method -> adds a new item to the end of an array.
array.push(1);
// to remove an element to the array use .pop() method -> removes the last item from the end of an array
array.pop();
// it act like a stack.
var number = 3;
function fizzBuzz() {
  if (number % 3 === 0){
    output.push("Fizz");
    number += 1;
  } else {
    if(number % 5 === 0)
    {
      output.push("Buzz");
      number += 1;
    }else {
      if(number % 3 === 0 && number %5 ===0){
        output.push("FizzBuzz");
      }
      else {
        output.push(number)
      number += 1;
      }
    }
  }
  console.log(output);
}

fizzBuzz()