// paste and overwrite the following line cell copied from the gradesheet
var grades = [21101183, 40.56, 21101317, 49.67, 22301165, 64.8, 22301511];


var x = document.getElementsByTagName('td');
var student_ids_usis = [];
var m = 28;

// var k = 31;
// for (let i = 0; i < Math.floor(x.length/13)-1; i++) {
//     x[k].textContent = '';
//     k += 13;
// }


//// Comment the following block and uncomment the above one to clear marks for all

var k = 31;
for (let i = 0; i < Math.floor(x.length/13)-1; i++) {
    student_ids_usis.push(x[m].textContent);
    for (let j = 0; j < student_ids_with_grades.length; j += 2) {
        if(student_ids_usis[i] == student_ids_with_grades[j]) {
            x[k].textContent = student_ids_with_grades[j+1];
            break;
        }
    }
    k += 13;
    m += 13;
}
