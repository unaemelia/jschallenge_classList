class StudentParagraphs {
    currentIndex = 0;

    constructor(_container, _groupSize) {
        this.container = _container;
        this.groupSize = _groupSize;
    }

    addStudent(student) {
        let studentName = student.getFullName();
        let groupIndex = Math.floor(this.currentIndex / this.groupSize) + 1;
        let className = (groupIndex % 2) ? "style1" : "style2";
        this.createParagraph(groupIndex, studentName, className);
        this.currentIndex++;
    }

    addListOfStudents(studentList) {
        for (; this.currentIndex < studentList.length;) {
            this.addStudent(studentList[this.currentIndex]);
        }
    }

    createParagraph(index, value, className = "") {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = index + ". " + value;
        paragraph.className = className;
        this.container.append(paragraph);
    }
}

export default StudentParagraphs;