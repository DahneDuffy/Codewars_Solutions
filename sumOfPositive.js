// 8kyu Sum of Positive

// SOLUTION 

function positiveSum(arr) {
    return arr.reduce((acc,el)=>{
      if(el>0){
        acc+=el;
      }
      return acc;
    },0)
  }