var btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (username.length == 0){
        alert('Username không được để trống')
    }
    else if (password.length == 0){
        alert('Password không được để trống')
    } 
    else {
        if (password.length < 8){
            alert('Password phải có ít nhất 8 ký tự')
            }
        else {
            alert('Bạn đã nhập đúng theo yêu cầu')
        }
    }    
    console.log(username);
    console.log(password);
})


