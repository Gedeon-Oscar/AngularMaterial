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

  //X = JSON.parse(this.product);

  //*
  Sequential(){}

  ngOnInit(): void 
  {
    this.stringified_Data = JSON.stringify(this.product);
    //console.log("FromAlerts: "+ this.stringified_Data );
    
    //*
    let array = [ this.stringified_Data ]; array.forEach((element) => {
      
      return this.parsed_Data = JSON.parse(element);
      //return console.log(this.parsed_Data);
      console.log("PRICE: " +this.parsed_Data.price);

      if ( this.parsed_Data.price === '700' ) {
        console.log('SUCCESS');
         return this.product.price = this.parsed_Data.price;
        //this.product.price = '700'; 
      } else {
        console.log('FAILURE');
      }
      
    });

  }

}
