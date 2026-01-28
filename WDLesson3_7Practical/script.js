/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function calculateDistance() {

  // Retrieve input values
  var x1 = Number(document.getElementById("x1").value);
  var y1 = Number(document.getElementById("y1").value);
  var x2 = Number(document.getElementById("x2").value);
  var y2 = Number(document.getElementById("y2").value);

  // Perform calculation
  var distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
  );

  // Display result
  document.getElementById("result").innerHTML =
    "Distance: " + distance;
}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function calculateCompoundInterest() {

  // Retrieve input values
  var principal = Number(document.getElementById("principal").value);
  var rate = Number(document.getElementById("rate").value);
  var time = Number(document.getElementById("time").value);

  // Convert rate to decimal
  rate = rate / 100;

  // Compound interest formula: A = P(1 + r)^t
  var amount = principal * Math.pow(1 + rate, time);

  // Display result
  document.getElementById("compoundResult").innerHTML =
    "Total Amount: " + amount;
}


