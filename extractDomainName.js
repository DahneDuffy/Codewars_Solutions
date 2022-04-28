// //5kyu extract domain name

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let first = url.match(/(?<=\/\/)(.*?)(?=\.)/g)
    let second = url.match(/(?<=\.)([^\/]*?)(?=\.)/g)
    let third = url.match(/(.*?)(?=\.)/g)
    
    if(first){
      return first[0]=="www" ? second[0] : first[0];
    } else if(first && third){
      return first[0]=="www" ? third[0] : first[0];
    } else if (second){
      return second[0];
    } else {
      return third[0]
    }
      }

       //end