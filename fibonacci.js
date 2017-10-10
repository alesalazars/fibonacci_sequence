/* ====== PRINT "N" FIRST NUMBERS OF THE FIBONACCI SEQUENCE ======*/

// I declare the variable fib (for Fibonacci)
// and tell the array to consider 0 and 1 as the first 2 items.
var fib = [0,1];

// "n" is the variable that determines the amount of elements of the array
// that will show up later.
n = 10;

// It iterates "n" number of times adding new elements to the array
// forming the Fibonacci sequence.
for ( i = 2 ; i < n ; i++ ) {
  fib[i] = fib[i-1] + fib[i-2]; // The new element is always the sum of the previous 2.
}

//I tell the Console to print the array.
console.log(fib);
