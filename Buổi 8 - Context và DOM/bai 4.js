var btn = document.getElementById('btn')
// var num1 = parseFloat(document.getElementById('num1').value)
// var num2 = parseFloat(document.getElementById('num2').value)

function add(num1, num2){
    let sum = num1 + num2
    console.log(sum);
}

btn.addEventListener('click', add.bind(null, 6, 7))