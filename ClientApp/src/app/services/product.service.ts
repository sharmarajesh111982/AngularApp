import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
          { id: '1', name: 'name-1', price: 100, photo: 'Chrysanthemum.jpg' },
          { id: '2', name: 'name-2', price: 200, photo: 'Desert.jpg' },
          { id: '3', name: 'name-3', price: 300, photo: 'Hydrangeas.jpg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
