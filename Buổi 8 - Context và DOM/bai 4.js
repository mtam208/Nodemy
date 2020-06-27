var btn = document.getElementById('btn')


btn.addEventListener('click', function(num1, num2){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    console.log(num1 + num2);
})
