import { Person } from "./person";
/**
 *  Class qui represente un Selfie
 */
export class Selfie {
    image:string = '';
    person: Person;
    titre:string ='';

    constructor(){

        this.person= new Person();
    }

}
