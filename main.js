import Student from "./student.js";
import StudentParagraphs from "./studentparagraphs.js";

let jsOutputElement = document.getElementById("jsOutput");
let classList = [
    new Student("Chihiro", "Yoshimura"),
    new Student("Markus", "Bergman"),
    new Student("Sebastian", "Vikström"),
    new Student("Zia", "Ullah"),
    new Student("Pablo", "Diaz"),
    new Student("Una", "Arnadottir"),
];

let studentParagraphs = new StudentParagraphs(jsOutputElement, 2);
studentParagraphs.addListOfStudents(classList);
studentParagraphs.addStudent(new Student("Sebastian", "Salonen"));