import { Component } from '@angular/core';
//* import list
//import { Product } from "../products";

@Component({
  selector: 'app-app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent {

  //* decaring list of products
  products:Array<{id:number,name:string,description:string,price:string}> =
  [
    {id:1,name: 'XL',description:'A large phone with one of the best srceens',price:'700'},
    {id:2,name: 'Mini',description:'A great phone with one of the best cameras',price:''},
    {id:3,name: 'Standard',description:'',price:''}
  ];
  

  //* button that enables the displays that the product has been shared
  share()
  {
    window.alert("The Product has been shared!");
  }

  //*
  ngOnInit():void
  {

  }

}
