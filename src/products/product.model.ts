export class Product {
    public id: string;
    public title : string
    public description: string;
    public price:  number

    constructor( id:string , title: string, desc:string , price:number){
        this.id = id;
        this.title = title;
        this.description = desc;
        this.price
    };
}