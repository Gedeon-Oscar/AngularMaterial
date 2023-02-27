//* main
import { Component,OnInit } from '@angular/core';
//* navigation
import { ActivatedRoute } from '@angular/router';
//* data
import { Product, products } from '../products';
//* service
import { CartService } from '../cart.service';


@Component({
  selector: 'app-app-product-details',
  templateUrl: './app-product-details.component.html',
  styleUrls: [
    './app-product-details.component.css',
    '../app-product-list/app-product-list.component.css'
  ]
})
export class AppProductDetailsComponent implements OnInit{

  product:Product | undefined;

  constructor( 
    private route: ActivatedRoute, private cartService: CartService )
  {}

  //* defining the addToCart() method, which adds the current product to the cart.
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  //*
  ngOnInit(): void {

    //*First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //* console testing
    //console.log( 'product: '+JSON.stringify(products) );

    //*Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
      
  }

}
