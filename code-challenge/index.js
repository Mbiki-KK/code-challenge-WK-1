//code challenge solution
//this prompts the user to insert a number between 0-100
let marks = prompt("Enter student marks (0-100):");
//ives the "grade" as an object
let grade;

//this validates the output
while (isNaN(marks) || marks<0 || marks>100){
    marks=prompt("Please enter marks between 0-100")
}

//checks to grade according to the marks
if (marks >= 80 && marks <= 100) {
  grade = "A";
} else if (marks >= 60 && marks <= 79) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else {
    grade = "E";
}

//displays the grade
console.log("Grade: " + grade);
