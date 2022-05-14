// 6kyu Persistent Bugger

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// SOLUTION

function persistence(num) {
    //Params - number will be in integer format
   //Returns - the return value should be an integer, equal to the mult. persistence
   //Example - see below e.g. 39-->3 because (3*9=27; 2*7=14; 1*4=4), there are foure instances of internal digit multiplication
   //PSEUDO: While loop (String(num).length>1) multiply num[0]*num[1]*...*num[n]
   //keep track of the number of instances in the loop with a counter variable, intitialzed at zero
   //you'll need to reassign num each time so the while loop updates the condition
   let counter=0;
   while(String(num).length>1){
     num = String(num).split('').reduce((acc,num)=>{
       return acc*Number(num)},1)
     console.log(num)
     counter++
   }
   
   return counter;
 }