import { Company } from "./company";
import { CSA } from "./csa";
import { Complaints } from "./complaints";

export class Tower {
    public towerId:number;
	public circle:string;
	public address:string;	
	public engineerAssc:string;
	public lease:string;
	public latitude:DoubleRange;
    public longitude:DoubleRange;
    
    public companies:Company[];
	public software:string;
    public hardware:string;
    public csa:CSA;
    public status:boolean;
    public complaints:Complaints[];
}
