var arr = [1,5,7,8,9,15,8]

console.log("Các số chẵn của mảng là: " + arr.filter(num => num%2 == 0));

console.log("Các số lẻ của mảng là: " + arr.filter(num => num%2 != 0));

console.log("Các số lớn hơn hoặc bằng 5 của mảng là: " + arr.filter(num => num >= 5));

var newArr = arr.filter(num => num%5 == 0)
console.log("Tổng các số chia hết cho 5 của mảng là: " + newArr.reduce((sum, num) => sum + num, 0))

console.log("Tích 3 số đầu của mảng là: " + arr.slice(0,3).reduce((product, num) => product * num, 1))

console.log("Tổng 3 số cuối của mảng là: " + arr.slice(arr.length-3,arr.length).reduce((sum, num) => sum + num, 0))

console.log(arr.find(num => num === 5) ? "Có số 5 trong mảng" : "Không có số 5 trong mảng" )

console.log("Có " + arr.filter(num => num === 8).length + " phần tử bằng 8 trong mảng");
