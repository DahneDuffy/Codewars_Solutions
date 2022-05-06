// 6 kyu "Stop spinning my words"

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// SOLUTION

function spinWords(string){
    const stringArr = string.split(' ');
    
    const mappedArr = stringArr.map(string =>{
      if (string.length>=5){
        return string.split('').reverse().join('')
      } else {
        return string;
      }
    })
    
    return mappedArr.join(' ');
  }