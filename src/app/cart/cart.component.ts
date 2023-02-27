import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [
    './cart.component.css',
    '../app-product-list/app-product-list.component.css'
  ]
})
export class CartComponent {

  //* Defining the items property to store the products in the cart.
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ){ 
    //* making sure that the items are added to the cart
    this.items; 
  }

}
