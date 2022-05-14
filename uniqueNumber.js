// 6kyu Find the Unique Number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// SOLUTION

function findUniq(arr) {
    //Parameters - array of numbers in either integer or float type, arr.length >=3; *Some arrays will be huge!
    //Return - return a single number, which is the only unique occurrence of that number in the given array 
    //Examples - see below e.g. findUniq([1,0,0])-->1, as that occurs only once
    //PSEUDO - you could sort() the array and then compare the first and second elements, if they are equal return the last element of the array, else return the first element
    //thoughts - sort() may not be the best performance wise - what else to do?  Could use a filter based on conditional of indexOf() and lastIndexOf()
    
    //Solution 1 - 2551 ms
  //   let sortedArr = arr.sort()
    
  //   return sortedArr[0]===sortedArr[1] ? sortedArr[sortedArr.length-1] : sortedArr[0];
    
    //Solution 2 - 2682 ms
    return arr.filter(element=>{
      return arr.indexOf(element)===arr.lastIndexOf(element);
    })[0]
    
  }