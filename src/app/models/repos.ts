export class Repos {
    constructor(public name:string, public html_url:string,
         public description:string, public createdOn:Date,
        public forks:number,public count:number, public lang:string){}
}
