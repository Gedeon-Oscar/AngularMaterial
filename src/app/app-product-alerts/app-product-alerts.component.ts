import { Component,Input,OnInit } from '@angular/core';
//* import list
import { Product } from "../products";

@Component({
  selector: 'app-app-product-alerts',
  templateUrl: './app-product-alerts.component.html',
  styleUrls: ['./app-product-alerts.component.css']
})
export class AppProductAlertsComponent {

  @Input() product!: Product;

}
