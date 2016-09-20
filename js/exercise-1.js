var price = 28.99;                            // Create a variable named price, and assign the value 28.99 to it
var discount = 10;                            // Create a variable named discount, and assign the value 10 to it
var total =                                   // Create a variable named total...
  price - (price * (discount / 100));         // ...and assign the result of this expression to it
if (total > 25) {                             // If total value is bigger than 25...
  freeShiping();                              // ...call the freeShiping function
}                                             // End the if statement

var count = 10;                               // Create a variable named count, and assign the value 10 to it
while (count > 0) {                           // While the count value is bigger than 0...
  juggle();                                   // ...call the juggle function...
  count = count - 1;                          // ...and decrease 1 by count
}                                             // End the while loop

var dog = {name: "Rover", weight: 35};        // Create a variable named dog, and assign an object with two attributes (name, weight)
if (dog.weight > 30) {                        // If the dog's attribute weight is bigger than 30...
  alert("WOOF! WOOF!");                       // ...alert this message!
} else {                                      // or...
  alert("woof! woof!");                       // ...alert this message!
}                                             // End the if/else statement

var circleRadius = 20;                        // Create a variable named circleRadius, and assign the value 20 to it
var circleArea =                              // Create a variable named circleArea...
  Math.PI * (circleRadius * circleRadius);    // ...and assign the result of this expression to it
