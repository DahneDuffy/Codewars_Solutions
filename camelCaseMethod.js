//6kyu CamelCase method

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
    let stringArr = this.split(' ');
    let result =  stringArr.map((element,index,arr)=>{
        return element.charAt(0).toUpperCase() + element.slice(1); 
    });
    return result.join('');
  }

   //end