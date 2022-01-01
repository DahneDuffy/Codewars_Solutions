// 6kyu Square Every Number

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// SOLUTION

function squareDigits(num){
    //parameters = accepts a positive integer
    //return = returns a psoitive intger where each digit in the input has been squared and concatenated
    //example = see below; squareDigits(3212) --> 9414
    //Pseudo - convert nums to string and convert to array via split('')
            // use .map() to square each number (make sure to think about implicit conversion here)
            // join('') the mapped array back together and return it in integer
    
    let mappedNum = String(num).split('').map(number=>{return number*number}).join('')
    return Number(mappedNum)