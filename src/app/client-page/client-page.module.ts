import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPageRoutingModule } from './client-page-routing.module';
import { ClientPageComponent } from './client-page.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientPageComponent,
    HomeComponent,
    WishlistComponent,
    PaymentComponent,
    CartComponent,
    InvoiceComponent,
    OrderComponent,
    ProfileComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientPageModule { }
