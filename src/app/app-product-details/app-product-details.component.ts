//* main
import { Component,OnInit } from '@angular/core';
//* navigation
import { ActivatedRoute } from '@angular/router';
//* data
import { Product, products } from '../products';

//*
interface ProductInterface{
  id:number;
  name:string;
  price:string;
  description:string;
}

@Component({
  selector: 'app-app-product-details',
  templateUrl: './app-product-details.component.html',
  styleUrls: [
    './app-product-details.component.css',
    '../app-product-list/app-product-list.component.css'
  ]
})
export class AppProductDetailsComponent implements OnInit{

  product: Product | undefined;

  constructor( private route: ActivatedRoute ){}

  ngOnInit(): void {

    //*First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //*Find the product that correspond with the id provided in route.
    //this.product = products.find(this.product => this.product.id === productIdFromRoute);
    console.log( productIdFromRoute  );
    //console.log( this.product  ); 
      
  }

}
