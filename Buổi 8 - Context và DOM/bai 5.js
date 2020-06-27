var username = document.getElementById('username')
var typing

username.addEventListener('keyup',function(){
    clearTimeout(typing)
    typing = setTimeout(function(){
        console.log(username.value);
        alert('You typed: ' + username.value)
    },1000)
})