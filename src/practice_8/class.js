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
    }
}
export default Class;
