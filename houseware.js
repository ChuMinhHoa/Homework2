import {product} from "./product.js"

export class houseware extends product{
    reliability;
    saleoff=0.1;
    constructor(id,name,price,category,date,reliability){
        super(id,name,price,category,date);
        this.reliability=reliability;
    }
}
