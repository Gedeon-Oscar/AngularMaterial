//* main
import { Component,Input } from '@angular/core';
//* import list
import { Product } from "../products";

@Component({
  selector: 'app-app-product-alerts',
  templateUrl: './app-product-alerts.component.html',
  styleUrls: ['./app-product-alerts.component.css']
})
export class AppProductAlertsComponent {

  //* var declaration
  stringified_Data:any;
  parsed_Data:any;

  //* receving data from the parent component
  @Input() product!: Product;

  ngOnInit(): void 
  {

    //*
    this.stringified_Data = JSON.stringify(this.product);
    this.parsed_Data = JSON.parse(this.stringified_Data);
    this.product.price =  this.parsed_Data.price;
    return this.product.price;

    /*
    if( this.product.price === 700)
    {
      //console.log('Success');
    }else
    {
      console.log( 'Error' );
    }
    */
    
  }

}
