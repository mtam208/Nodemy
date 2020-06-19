var arr = [1,5,7,8,9,15,8]
var sum = 0
var sum1 = 0
var k = 0
var product = 1
var exist, result = false

console.log("Các số chẵn của mảng là:");
for (num of arr){
    if (num % 2 == 0){
        console.log(num)
    }
}

console.log("Các số lẻ của mảng là:");
for (num of arr){
    if (num % 2 != 0){
        console.log(num);
    }
}

console.log("Các số lớn hơn hoặc bằng 5 của mảng là:");
for (num of arr){
    if (num >= 5){
        console.log(num);
    }
}

console.log("Tổng các số chia hết cho 5 của mảng là:");
for (num of arr){
    if (num % 5 == 0){
        sum += num
    }
}
console.log(sum)

console.log("Tích ba số đầu của mảng là:");
for (i=0; i<3; i++){
    product *= arr[i]
}
console.log(product);

console.log("Tổng ba số cuối của mảng là:");
for (i=arr.length-3; i<arr.length; i++){
    sum1 += arr[i]
}
console.log(sum1)

console.log("Có số 5 trong mảng không?");
for (num of arr){
    if (num === 5){
        exist = true
        result = result || exist
    }
}
if (result){
    console.log("Có");
}
else{
    console.log("Không có");
}

console.log("Số phần tử bằng 8 trong mảng là:");
for (num of arr){
    if (num == 8){
        k++ 
    }
}
console.log(k);