function cariMedian(arr) {
  // you can only write your code here!
  var median;
  //arr.sort(function(a, b){return a - b});
  if(arr.length%2 !== 0){
    for(i=0; i<arr.length; i++) {
      if (i+1 === (arr.length/2)+0.5) {
        median = arr[i];
        break;
      }
    }
  }else {
    for(i=0; i<arr.length; i++) {
      if(i+1 === arr.length/2) {
        median = (arr[i] + arr[i+1])/2;
        break;
      }
    }
  }
  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
