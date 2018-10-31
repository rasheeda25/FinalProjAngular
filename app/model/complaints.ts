import { CSA } from "./csa";
import { Tower } from "./tower";

export class Complaints {
    public complaintId:number;
    public csa:CSA[];
    public tower:Tower[];
    public type:string;
    public description:string;
    public viewStatus: boolean;
    public actionStatus:boolean;
    public dateOfIssue:Date;
    public dateOfApproval:Date;

}
