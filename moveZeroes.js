// 5kyu Move Zeroes to the End 

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// SOLUTION

function moveZeros(arr) {
    let zeroCount = 0
    arr.forEach(element =>{
      if (element===0){
        zeroCount++;
      }
    })
    
    let filteredArr = arr.filter(element=>{return element!==0})
    
    for(let i=0;i<zeroCount;i++){
      filteredArr.push(0);
    }
    
      return filteredArr;
    }