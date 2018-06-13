class Class{
    leader;
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (this.isIn(student)) {
            this.leader = student;
            if (this.teacher !== undefined && this.teacher.klasses.includes(student.klass)) {
                console.log("I am " + this.teacher.name + ". I know " + student.name +" become Leader of Class " + this.number + ".");
            }
        }
        else {
            console.log("It is not one of us.");
        }
    }
    appendMember(student) {
        student.klass = this;
        if (this.teacher !== undefined && this.teacher.klasses.includes(student.klass)) {
            console.log("I am " + this.teacher.name + ". I know " + student.name +" has joined Class " + this.number + ".");
        }
    }
    isIn(student) {
        if (this == student.klass) {
            return true;
        }
        return false;
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }
    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}
export default Class;
