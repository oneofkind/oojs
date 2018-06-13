import Person from "./person";

class Worker extends Person{
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass == undefined) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
        return super.introduce() + " I am a Teacher. I teach Class " + this.klass.number + ".";
    }
    introduceWith(student) {
        if (this.klass == student.klass) {
            return super.introduce() + " I am a Teacher. I teach " + student.name + ".";
        }
        return super.introduce() + " I am a Teacher. I don't teach " + student.name + ".";
    }
}
export default Worker;



