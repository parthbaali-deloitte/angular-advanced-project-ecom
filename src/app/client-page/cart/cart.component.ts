import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!: Product[];
  selectedValue!: string;
  u_id = localStorage.getItem("id")
  url = "http://localhost:3000/user/"

  constructor(private cartService: CartService, private service: ApiService, private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartService.getCart().subscribe((data) => {
      this.cart = data.cart
    })
  }

  removeProductFromCart(product: any) {
    const headers = { 'content-type': 'application/json' }
    this.service.getUserById(this.u_id).subscribe(
      data => {
        var index = data.cart.findIndex(function (item, i) {
          return item.id == product.id
        });
        data.cart.splice(index,1)
        const body = JSON.stringify(data);
        return this.http.put(this.url + this.u_id, body, { 'headers': headers }).subscribe(
          response => {
            this.ngOnInit()
          }
        )
      }
    )
  }

  openBuyDialog() {
    const dialogRef = this.dialog.open(PaymentComponent);

    // dialogRef.afterClosed().subscribe(result => {

    //   if(result){
    //     this.productService.buyProduct(product.id).subscribe(() =>{
    //       this.showSnackBarProductBought(product.name, 'Dismiss');
    //       this._getWishlist();
    //     })
    //   }
    // });

  }

}
