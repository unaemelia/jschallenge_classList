class Student {
    constructor(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

export default Student;