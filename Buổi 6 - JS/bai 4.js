var doan = {
name: 'Doan',
    age: 22,
    salary: 1000
}
var trung = {...doan, clone:true}
trung.name = 'Trung'
console.log(trung);
