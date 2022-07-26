import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  val!: number
  tax!: number
  person!: Person
  u_id = localStorage.getItem("id")
  url = "http://localhost:3000/user/"

  constructor(private service: ApiService, private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.emptyCart()
    this.getUserInfo()
    this.getTotalPrice()
  }

  getTotalPrice() {
    this.service.getUserById(this.u_id).subscribe(
      data => {
        let total_price = 0
        data.cart.forEach((v, i) => {
          total_price += parseInt(v.product_price)
          this.addCount(v)
        })
        this.val = total_price
        this.tax = total_price * 0.1
      }
    )
  }

  getUserInfo() {
    this.service.getUserById(this.u_id).subscribe(
      data => {
        this.person = data
      }
    )
  }

  addCount(product: Product) {
    this.productService.getProductById(product.id).subscribe(
      data => {
        data.count += 1
        this.productService.updateProduct(data);
      }
    )
  }
}
