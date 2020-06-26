var array = [1,5,7,8,9,15]

console.log("Các số chẵn trong mảng là: " + array.filter(num => num % 2 == 0));

console.log("Các số lẻ trong mảng là: " + array.filter(num => num % 2 != 0));

console.log("Các số lớn hơn hoặc bằng 5 trong mảng là: " + array.filter(num => num >= 5));

console.log("Các số chia hết cho 5 trong mảng là: " + array.filter(num => num % 5 == 0));

var newArr = array.filter(num => num > 5)
console.log("Tăng các số lớn hơn 5 trong mảng và tăng thêm 1: " + newArr.map(num => num + 1));

console.log("Copy mảng từ phần tử số 3 đến phần tử cuối cùng:")
console.log(array.slice(2, array.length));

console.log("Xóa phần tử thứ 4 trong mảng:");
array.splice(3,1)
console.log(array);

console.log("Thêm 1 phần tử vào cuối mảng:");
array.push(20)
console.log(array);
