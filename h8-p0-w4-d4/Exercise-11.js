function shoppingTime(memberID, moneY) {
  // you can only write your code here!
  if (memberID == '' || memberID == null){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  if (moneY < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }


  var obj = {memberId: memberID, money: moneY, listPurchased: [], changeMoney: moneY};
  let sale = {
    item: {
    'Sepatu Stacattu': {
      price: 1500000
      },
    'Baju Zoro': {
      price: 500000,
      },
    'Baju H&N': {
      price: 250000,
      },
    'Sweater Uniklooh': {
      price: 175000,
      },
    'Casing Handphone': {
      price: 50000,
      }
    }
  }
  for (let sku in sale.item) {
    if (sale.item[sku].price <= obj.changeMoney) {
      obj.listPurchased.push(sku);
      obj.changeMoney -= sale.item[sku].price;
    }
  }
  return obj;

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
