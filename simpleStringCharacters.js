// //7kyu Simple string characters

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s){
    let result = s.split('').reduce((resultArr,character)=>{
     if(/[A-Z]/.test(character)){
       resultArr[0] +=1;
       return resultArr;
     }else if(/[a-z]/.test(character)){
       resultArr[1] +=1;
       return resultArr;
     } else if(/[0-9]/.test(character)){
       resultArr[2] +=1;
       return resultArr;
     } else{
       resultArr[3] +=1;
       return resultArr;
     }
   },[0,0,0,0])
    return result;
  }

 //end