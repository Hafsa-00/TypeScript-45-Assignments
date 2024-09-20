"use strict";
// Places to visit
let places = ["Paris", "Sydney", "Tokyo", "New York"];
// Print original array
console.log("Original order:", places);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...places].sort());
// Show that the original array is still in its original order
console.log("Original order:", places);
// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());
// Show that the original array is still in its original order
console.log("Original order:", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);
// Reverse the order of the list again
places.reverse();
console.log("Original order:", places);
// Sort the array in alphabetical order
places.sort();
console.log("Alphabetical order:", places);
// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("Reverse alphabetical order:", places);
