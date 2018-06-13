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
        }
        else {
            console.log("It is not one of us.");
        }
    }
    appendMember(student) {
        student.klass = this;
    }
    isIn(student) {
        if (this === student.klass) {
            return true;
        }
        return false;
    }
}
export default Class;
