import {Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';

import {Product} from './product';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    providers: [ ProductService ]
})
export class ProductComponent implements OnInit {
    products: Product[];

    constructor(private  _productService: ProductService) {
    }

    ngOnInit() {
        this.getProducts();
    }
    getProducts(){
        this.products = this._productService.getProductsFromData();
    }

}
