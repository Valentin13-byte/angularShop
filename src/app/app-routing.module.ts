import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:"add-product",component:AddProductComponent
  },
  {
    path:"",component:FirstPageComponent
  },
  {
    path:"my-cart",component:MyCartComponent
  },
  {
    path:"product",component:ProductComponent
  },
  {
    path:"product-list",component:ProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
