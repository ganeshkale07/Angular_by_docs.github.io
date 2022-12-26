import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path : '' , component : ProductListComponent},
  {path : 'products/:productId' , component : ProductDetailComponent},
  {path : 'cart' , component : CartComponent},
  {path : 'shipping' , component : ShippingComponent},

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
