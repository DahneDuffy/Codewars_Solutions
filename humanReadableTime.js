// //5kyu Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let hours = 0;
    let min = 0;
    let sec = 0;
    
    while (seconds>=3600){
      seconds -= 3600;
      hours++;
    }
    while(seconds>=60){
      seconds -=60;
      min++;
    }
    seconds!==0 ? sec = seconds : sec;
    
    if(String(sec).length===1){
      sec = String(sec).padStart(2,'0')
    }
    if(String(min).length===1){
      min = String(min).padStart(2,'0')
    }
    if(String(hours).length===1){
      hours = String(hours).padStart(2,'0')
    }
    return `${hours}:${min}:${sec}`
  }

   //end