function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var obj = [];
  for (i = 0; i < arrPenumpang.length; i++) {
    obj.push({})
    obj[i].penumpang = arrPenumpang[i][0];
    obj[i].naikDari = arrPenumpang[i][1];
    obj[i].tujuan = arrPenumpang[i][2];
    let start, end;
    for (j = 0; j<rute.length; j++) {
      if (rute[j] === obj[i].naikDari) {
        start = j;
      }
      if (rute[j] === obj[i].tujuan) {
        end = j;
      }
    }
    obj[i].bayar = 2000 * (end - start);
  }
  return obj;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
