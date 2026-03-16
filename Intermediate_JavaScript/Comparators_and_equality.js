/* === : Equal to
  !==: Not equal to
  > : Greater than
  < : Lesser than
  >= : Greater than or equal to
  <= : Lesser than or equal to
*/

// the difference between == and === 
// == : relative comparison it will compare 2 varibale but after type coercion so it will be the same data type
var a = 1;
var b = "1";

console.log(typeof(a)); // number
console.log(typeof(b)); // string

if (a == b){
  console.log("yes");
} else {
  console.log("no");
}
// -> it will print yes but there are different data types

// === : absolute comparison it will compare 2 variable without type coercion based on there data type
if (a === b){
  console.log("yes");
} else {
  console.log("no");
}

// -> it will print no because they are different data type, number and string.


