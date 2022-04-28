//7Kyu Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
    if(cc.length>4){
      ccLength = cc.length-4;
      pund = '#';
      
    return pund.repeat(ccLength) + cc.slice(-4);
    } else {
      return cc;
    }
  }

   //end