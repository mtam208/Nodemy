var phucBirthday = '26-11-1992'
var cuongBirthday= '27-11-1994'

function convertDate(vnDate){
    return enDate = vnDate.split('-').reverse().join('-')
}

var phucBirthday_en = convertDate(phucBirthday)
var cuongBirthday_en = convertDate(cuongBirthday)

var phucBirthday_date = new Date(phucBirthday_en)
var cuongBirthday_date = new Date(cuongBirthday_en)

console.log(phucBirthday_date < cuongBirthday_date ? 'Phúc lớn tuổi hơn Cường'
    : phucBirthday_date > cuongBirthday_date ? 'Cường lớn tuổi hơn Phúc'
    : 'Cường và Phúc bằng tuổi');

var date100 = new Date(phucBirthday_date.setDate(phucBirthday_date.getDate() + 100))
var day100 = date100.getDate()
var weekday100 = date100.getDay()
if (weekday100 > 0){
    weekday100 ++
    weekday100 = 'Thứ ' + weekday100
} else {
    weekday100 = 'Chủ Nhật'
}

console.log('Sau 100 ngày từ phucBirthday là Ngày ' + day100 + ' ' + weekday100);




