function checkAB(num) {
  // you can only write your code here!
  var posisiA = [];
  var posisiB = [];
  for (i = 0; i<num.length; i++) {
    if(num[i] === 'a') {
      posisiA.push(i);
    }
    if(num[i] === 'b') {
      posisiB.push(i);
    }
  }
  var bool = false;
  for (i=0; i<posisiA.length; i++) {
    for(j=0; j<posisiB.length; j++) {
      if (Math.abs(posisiB[j] - posisiA[i]) === 4) {
        bool = true;
      }
    }
  }
  return bool;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
