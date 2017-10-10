/* ====== PRINT "N" FIRST NUMBERS OF THE FIBONACCI SEQUENCE ======*/

//I declare the variable fib (for fibonacci)
//and tell the array to consider 0 and 1 as the first 2 items.
var fib = [0,1];

//"n" is the variable that determines the amount of elements of the array that will show up later.
var n = fib.length;
n = 15;

//For loop that adds to the array the following numbers of the fibonacci sequence.
for ( i = 2 ; i < n ; i++ ) {
  fib[i] = fib[i-1] + fib[i-2];
}

//I tell the Console to print the array.
console.log(fib);
