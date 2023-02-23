import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//* components
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { AppProductDetailsComponent } from './app-product-details/app-product-details.component';


const routes: Routes = 
[
  {path:'', redirectTo:'productList', pathMatch:'full' },
  { path: 'productList', component: AppProductListComponent },
  { path: 'products/:productId', component: AppProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
