// 8kyu Find the smallest integer in the given Array


// SOLUTION  

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0]
      
    }
  }