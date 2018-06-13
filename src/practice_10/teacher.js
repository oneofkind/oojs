import Person from "./person";

class Teacher extends Person{
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        if (this.klasses === undefined) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
        return super.introduce() + " I am a Teacher. I teach Class " + this.klasses.map(value => value.number).join(", ") + ".";
    }
    isTeaching(student) {
        if (this.klasses.includes(student)) {
            return true;
        }
        return false;
    }
}
export default Teacher;
