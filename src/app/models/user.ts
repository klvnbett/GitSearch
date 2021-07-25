export class User {
    static output:any;
    constructor(public url:string, public login:string, public html_url:string,
        public loc:string, public reposits:number, 
        public followers:number, public following:number,public avataurl:string,
        public createdOn:Date){

        }
}
