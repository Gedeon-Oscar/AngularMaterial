import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder} from '@angular/forms';

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

  //* FormBuilder group() method to gather the user inputs
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ){ 
    //* making sure that the items are added to the cart
    this.items; 
  }

  //* Define an onSubmit() method to process the form. 
  onSubmit(): void {
    //* Process checkout data here
    //* The clearCart() method of the CartService is used to reset the form and clear the cart.
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
