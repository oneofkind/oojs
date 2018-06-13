class Class{
    leader;
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (this === student.klass) {
            this.leader = student;
        }
        else {
            console.log("It is not one of us.");
        }
    }
    appendMember(student) {
        student.klass = this;
    }
}
export default Class;
