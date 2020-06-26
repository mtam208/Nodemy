var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';

console.log('Số ký tự là: ' + greeting.length);

console.log(greeting.indexOf('nodemy') != -1 ? 
    'Từ nodemy nằm ở vị trí ' + greeting.indexOf('nodemy') :
    'Không có từ nodemy trong chuỗi');

console.log(greeting.indexOf('Nodemy') != -1 ? 
    'Từ Nodemy nằm ở vị trí ' + greeting.indexOf('Nodemy') :
    'Không có từ Nodemy trong chuỗi');

console.log(greeting.startsWith('Welcome') ?
    'Chuỗi bắt đầu bằng Welcome' :
    'Chuỗi không bắt đầu bằng Welcome');

var a = greeting.indexOf('Academy')
console.log(greeting.substring(a,));

console.log(greeting.split(' '));

console.log(greeting.trim());

console.log(greeting.includes('Nodemy')?
    'Có từ Nodemy trong chuỗi' : 
    'Không có từ Nodemy trong chuỗi');

console.log(greeting.replace(/Nodemy/g, 'NODEMY'));

console.log(greeting.toUpperCase());

console.log(greeting.charAt(4));