// 6kyu Bit Counting 

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// SOLUTION

var countBits = function(n) {
    let remainderTotal = 0;
    while ((n/2)>=1/2){
      if(n%2!=0){
        remainderTotal++
      }
      n = Math.floor(n/2);
    }
    return remainderTotal;
  };