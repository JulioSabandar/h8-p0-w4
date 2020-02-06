function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var faktor1 = 1;
  var faktor2 = angka;
  var dpm = (''+ faktor1 + angka).length;

    for(i=2; i<angka; i++) {
      if(angka%i === 0) {
        faktor1 = i;
        faktor2 = angka/i;
        if( dpm > (''+ faktor1 + faktor2).length ) {
          dpm = (''+ faktor1 + faktor2).length;
        }
      }
    }

  return dpm;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
