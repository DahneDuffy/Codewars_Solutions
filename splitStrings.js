//6kyu Split Strings

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let newArr = [];
    let arr = str.split('');
    console.log(arr);
    if(arr.length%2!==0){
      arr.push('_');
    }
    for (let i=0; i<arr.length; i+=2){
      newArr.push(arr[i]+arr[i+1]);
    }
     return newArr;
  }