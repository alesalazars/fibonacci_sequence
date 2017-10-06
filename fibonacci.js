/* ====== PRINT "N" FIRST NUMBERS OF THE FIBONACCI SEQUENCE ======*/

//I declare the variable fib (for fibonacci)
//and tell the array to consider 0 and 1 as the first 2 items.
var fib = [0,1];

//The "n" variable is the one that when altered, prints in the Console the first
// number of items of the array that I want to see.
var n = fib.length;
n = 10;

//for loop that adds to the array the following numbers of the fibonacci sequence.
for ( i = 2 ; i < n ; i++ ) {

  fib[i] = fib[i-1] + fib[i-2];
  fib.push(fib[i]);

  //due to an error that repats the last item in the list,
  //I removed it with the splice method.
  fib.splice(-1);

}

//I tell the Console to print the array.
console.log(fib);
