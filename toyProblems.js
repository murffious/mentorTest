//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (str) {
    return str.split("").reverse().join("")
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function (arr) {
    return arr.reduce((accum, current) =>{
        if (accum.indexOf(current) < 0) {
            accum.push(current);
        }
        return accum;
    }, []);
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function (str) {
   let jaden = str.split(' ')
   
   for (let i = 0; i < jaden.length; i++) {
     jaden[i] = jaden[i].charAt(0).toUpperCase() + jaden[i].substr(1);
   }
   return jaden.join(" ")
},

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function (str) {
  var vowelsCount = 0;


let vowels = str.match(/[aeiouAEIOU]/g)
if (vowels == null) {
return 0
}
  return vowels.length
},

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function (num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
