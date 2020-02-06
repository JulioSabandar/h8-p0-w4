function urutkanAbjad(str) {
  // you can only write your code here!
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var orderedString ='';
  for(i=0; i<alpha.length; i++) {
    for(j=0; j<str.length; j++) {
      if(alpha[i] === str[j]) {
        orderedString += str[j];
      }
    }
  }
  return orderedString;

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
