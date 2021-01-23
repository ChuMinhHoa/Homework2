import {product} from "./product.js"
import {houseware} from "./houseware.js"
import {clothes} from "./clothes.js"
import {food} from "./food.js"

let food1=new food(1,'ca',230,'thanh van','23/2/2020','ngon');
let food2=new food(2,'thit',280,'thanh van','23/2/2020','ngon');
let clothes1=new clothes(3,'quan',300,'quan jean','23/2/2020','100%','jean');
let clothes2=new clothes(4,'ao',300,'ao jean','23/2/2020','100%','jean');
let houseware1=new houseware(5,'ban',90000,'kodu','6-9-2021','good')

class store{
    products;
    income;
    constructor(){
        this.income=0;
        this.products=[];
    }
    add_product(product_){
        this.products.push(product_)
    }
    sale_product(product_id){
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id==product_id) {
                this.income_plus(this.products[i].price, this.products[i].saleoff);
                this.products.splice(i,1);
                break;
            }            
        }
    }
    income_plus(price,sale_off){
        this.income+=(price-price*sale_off);
    }

}

let new_store=new store();

new_store.add_product(food1);
new_store.add_product(food2);
new_store.add_product(clothes1);
new_store.add_product(clothes2);
new_store.add_product(houseware1);

new_store.sale_product(5);
new_store.sale_product(1);
console.log(new_store.income);
