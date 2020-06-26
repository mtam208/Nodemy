var arr = [1,8,5,2,7,6,9,2,6]

var asc_Arr = arr.sort((item1, item2) => item1 - item2)
console.log("Mảng theo thứ tự tăng dần: ", asc_Arr);

var des_Arr = arr.sort((item1, item2) => item2 - item1)
console.log("Mảng theo thứ tự giảm dần: ", des_Arr);


