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

  //* receving data from the parent component
  @Input() product!: Product;

  //* var declaration
  stringified_Data:any;
  parsed_Data:any;


  ngOnInit(): void 
  {
    this.stringified_Data = JSON.stringify(this.product);
    console.log("FromAlerts: "+ this.stringified_Data );
  }
}
