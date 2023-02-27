//* main
import { Component, OnInit } from '@angular/core';
//* request 
import { Observable } from 'rxjs';
//* service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: [
    './shipping.component.css',
    '../app-product-list/app-product-list.component.css'
  ]
})
export class ShippingComponent {

  //* injecting the cart service in the ShippingComponent constructor()
  constructor( private cartService: CartService )
  {}

  //*
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  //*
  ngOnInit(): void 
  {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
