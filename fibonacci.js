/* ====== PRINT "N" FIRST NUMBERS OF THE FIBONACCI SEQUENCE ======*/

//I declare the variable fib (for fibonacci)
//and tell the array to consider 0 and 1 as the first 2 items.
var fib = [0,1];

//For loop that adds to the array the following numbers of the fibonacci sequence.
//When the length is altered it returns that many numbers from the sequence.
for ( i = 2 ; i < (fib.length = 15) ; i++ ) {
  fib[i] = fib[i-1] + fib[i-2];
  fib.push(fib[i]);
}

//I tell the Console to print the array.
console.log(fib);
