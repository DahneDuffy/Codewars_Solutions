//6kyu Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let splitString = str.split('-');
   splitString[0]===str ? splitString = str.split('_') : splitString; 
   let result = splitString.map((item,index) => index===0 ? item : item[0].toUpperCase()+ item.slice(1));
   return result.join('');
 
 }