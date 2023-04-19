let equal_pressed = 0;
//Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

//Access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //display value of each button
    input.value += button_class.value;
  });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input
    alert("Invalid Input");
  }
});

//Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
});
//Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});


function calculateTotal1() {
  var notes2000 = parseInt(document.getElementById("2000").value) || 0;
  var notes500 = parseInt(document.getElementById("500").value) || 0;
  var notes200 = parseInt(document.getElementById("200").value) || 0;
  var notes100 = parseInt(document.getElementById("100").value) || 0;
  var notes50 = parseInt(document.getElementById("50").value) || 0;
  
  var totalAmount = (notes2000 * 2000) + (notes500 * 500) + (notes200 * 200) + (notes100 * 100) + (notes50 * 50);
  
  var ind2000 = (notes2000 * 2000);
  var ind500 = (notes500 * 500);
  var ind200 = (notes200 * 200);
  var ind100 = (notes100 * 100);
  var ind50 = (notes50 * 50);
  
  
  
  document.getElementById("result1").innerHTML = "Total amount: " + totalAmount + "<br>" +
      "2000 notes:  " + ind2000 + "<br>" +
      "500 notes :  " + ind500 + "<br>" +
      "200 notes :  " + ind200 + "<br>" +
      "100 notes :  " + ind100 + "<br>" +
      "50  notes :  " + ind50;
}