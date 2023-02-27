//* main
import { Injectable } from '@angular/core';
//* data
import { Product } from './products';
//*
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //* initializing&declearing  
  items: Product[] = [];

  //*
  constructor( private http: HttpClient ) 
  {}

  //* defining method
  addToCart(product: Product) {
    this.items.push(product);
  }
  //* defining method
  getItems() {
    return this.items;
  }
  //* defining method
  clearCart() {
    this.items = [];
    return this.items;
  }

  //*  method that uses the HttpClient get() method To get shipping data, from shipping.json
  getShippingPrices() 
  {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  

}
