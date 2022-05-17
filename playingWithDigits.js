// 6kyu Playing with Digits

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// SOLUTION 

function digPow(n, p){
    //Parameters: n is a positive integer (the successive digits of n can be represented a,b,c,d...); p is a positive integer
    //Return: should return value k if k exists, else return -1 (k needs to be a positive integer)
    //Example digPow(46288, 3) ==> 4^3 + 6^4 + 2^5 + 8^6 + 8^7 = 2360688 = 46288 * 51 ==> therefore k would be 51
    //Pseudo: String(n).split('') to get each digit into an array
    // .reduce to raise each digit to the particular power of p, use index +p as the power, and grab the sum
    //divide resultant sum by n to retrieve k
    //use a modulo to check for integer?
    //be aware of type issues
    
    let result = String(n).split('').reduce((sum,digit,index)=>{
      return sum + Number(digit**(index+p));
    },0)
    console.log(result)
    return result%n==0 ? result/n : -1;
  }