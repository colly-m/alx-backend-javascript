namespace Subjects {
    export interface Teacher {
        name: string;
        teach(subject: string): void;
    }

    export class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
