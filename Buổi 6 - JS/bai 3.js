var persons =
[{
	name: 'Trung',
	class: 'Nodemy01',
	dateJoin: '05-02-2020',
    age: 20
}, {
	name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19
}, {
	name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 20
}]

// console.log("Sắp xếp mảng object có tuổi tăng dần:");
// console.log(persons.sort((person1,person2) => person1.age - person2.age));

// function convertDate(vnDate){
//     return enDate = vnDate.split('-').reverse().join('-')
// }

// var temp = persons.sort(function(person1, person2){
//     var date1 = convertDate(person1.dateJoin)
//     var date2 = convertDate(person2.dateJoin)

//     if(date1 > date2){
//         return 1
//     }
//     if(date1 < date2){
//         return -1
//     }
//     if(date1 > date2){
//         return 0
//     }
// });
// console.log("Sắp xếp mảng theo ngày tham gia của học viên:");
// console.log(temp);

// function getMonth(date){
//     return month = date.split('-')[1]
// }

// var temp1 = persons.filter(function(person){
//     let month = getMonth(person.dateJoin)
//     if (month < 2){
//         return person
//     }
// })
// console.log("Học viên tham gia trước tháng 2:");
// console.log(temp1);

var temp2 = persons.map(function(person){
    person.name = person.name.toUpperCase()
    return person
})

console.log(temp2);