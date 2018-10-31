import { Tower } from "./tower";
import { Complaints } from "./complaints";
import { User } from "./user";

export class CSA {

    public csaId:number;
    public circle:string;
    public towers:Tower[];
    public user:User[];
    public complaints: Complaints[];
    public email:string;
}
