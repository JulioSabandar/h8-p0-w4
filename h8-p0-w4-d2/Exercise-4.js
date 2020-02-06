function cariModus(arr) {
  // you can only write your code here!
  var modus = -1;
  var count = 0;

  for(i = 0; i < arr.length; i++) {
    var count = -2;
    for(j = 0; j<arr.length; j++) {
      if(arr[j] === arr[i]) {
        count++;
      }
      if(count > modus) {
        modus = arr[i];
      }
      if(count === arr.length-2) {
        modus = -1;
      }
    }
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
