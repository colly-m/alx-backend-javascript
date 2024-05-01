namespace Subjects{

    export interface Teacher i{
        experienceTeachingJava?: number
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingJava !== undefined && this.teacher.experienceTeachingJava > 0 ?
	    `Available Teacher: ${this.teacher.firstName}`:
	    'No available teacher';
        }
    }
}
