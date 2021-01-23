import{product} from "./product.js"
export class food extends product{
    taste;
    saleoff=0.02;
    constructor(id,name,price,category,date,taste){
        super(id,name,price,category,date)
        this.taste=taste;
    }
}