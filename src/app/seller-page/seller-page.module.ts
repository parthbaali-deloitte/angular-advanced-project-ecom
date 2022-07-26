import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPageRoutingModule } from './seller-page-routing.module';
import { SellerPageComponent } from './seller-page.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellerPageComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SellerPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SellerPageModule { }
