// 5kyu Simple Pig Latin 


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


// SOLUTION


function pigIt(str){
    const strArr = str.split(' ')
    
    const mappedArr = strArr.map(string => {
      if (/[a-zA-Z]/.test(string[0])){
        return string.slice(1,string.length) + string[0] +"ay"
      } else {
        return string;
      }
    })
    
    return mappedArr.join(' ')
  }