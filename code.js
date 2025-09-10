
let points = prompt("Enter your marks") //prompt user to enter marks

// function checkGrade() {
//     let points = Grade(document.getElementById("points").value);
//     let grade;
//     if (points > 100 || points < 0 || isNaN(points)) {
//         grade = "Invalid points";
//     }
//     else if (points >= 79) { 
//         grade = "Grade A";
//     }
//     else if (points >60 <= 79) {
//         grade = "Grade B";
//     }
//     else if (points >49 <= 59) {
//         grade = "Grade C";
//     } 
//     else if (points >40 <= 49) {
//         grade = "Grade D";
//     }
//     else (points < 40)
//         grade = "Grade E";

//     document.getElementById("result").innerText = points;
// }

// checkGrade();   

let grade //variable to hold grade

if (points > 100 || points < 0 || isNaN(points)) { //check if points are valid
        grade = "Invalid points";
    }
    else if (points >= 79) {  //check for grade A
        grade = "Grade A";
    }
    else if (points > 60 && points < 79) {   //check for grade B
        grade = "Grade B";
    }
    else if (points > 49 && points <= 59) {  //check for grade C
        grade = "Grade C";
    }
    else if (points > 40 && points <= 49) {   //check for grade D
        grade = "Grade D";
    }
    else if (points < 40) {  //check for grade E
        grade = "Grade E";
    }
    




    alert(grade)   //display the grade