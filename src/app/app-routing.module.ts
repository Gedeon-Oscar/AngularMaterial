import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* components
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { AppProductDetailsComponent } from './app-product-details/app-product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes: Routes = 
[
  {path:'', redirectTo:'productList', pathMatch:'full' },
  { path: 'productList', component: AppProductListComponent },
  { path: 'products/:productId', component: AppProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
