import {Injectable} from '@angular/core';
import { Product } from './product';
import { PRODUCT_LISTS } from './product';



@Injectable()

export class ProductService {
    private products = PRODUCT_LISTS;


    getProductsFromData():Product[]{
        console.log(this.products);
        return this.products;
    }
}