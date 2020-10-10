class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
        }
    }

    registerStudent(studentToRegister) {
        if (this.students.filter(x = x => x.email === student.email).length > 0) {
            console.log(`The student ${student.email} is already registered.`);
        } else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp ${this.name}.`)
        }
        return this.students;
    }
}