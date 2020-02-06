function ubahHuruf(kata) {
  // you can only write your code here!
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var newKata = '';
  for(i=0; i<kata.length; i++) {
    for(j=0; j<alpha.length; j++) {
      if(kata[i] == alpha[j]) {
        newKata += alpha[j+1];
      }
    }
  }
  return newKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
