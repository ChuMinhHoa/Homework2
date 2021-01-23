import{product} from "./product.js"
export class clothes extends product{
    origin;
    materia;
    saleoff=0.05;
    constructor(id,name,price,category,date,origin,materia){
        super(id,name,price,category,date);
        this.origin=origin;
        this.materia=materia;
    }
}