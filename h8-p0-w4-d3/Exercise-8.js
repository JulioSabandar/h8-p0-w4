function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  alpha= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var tbk='';
  for (i=0; i<kalimat.length; i++) {
    for(j=0; j<alpha.length; j++) {
      if(kalimat[i] === alpha[j]) {
        j>25? tbk+= alpha[j-26]: tbk+= alpha[j+26];
        break;
      }
      if(j === alpha.length-1) {
        tbk+=kalimat[i];
      }
    }
  }
  return tbk;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
