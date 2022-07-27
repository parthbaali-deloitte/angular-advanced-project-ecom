import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  u_id = localStorage.getItem("id")
  url = "http://localhost:3000/products/"

  constructor(
    // public products: ProductsModel
    private service: ProductService,
    private wishlistService: WishlistService,
    private http: HttpClient
  ) {

  }
  ngOnInit() {
    this.getProduct()

  }


  addProductWishlist(product: any) {
    this.wishlistService.addWishlist(product.id)
  }
  openBuyDialog(product: any) {

  }

  getProduct() {
    this.products = []
    this.service.getProductByOwner().subscribe(
      (data: any) => {
        data.forEach((v: Product, i: any) => {
          if (v.owner == this.u_id) {
            this.products.push(v)
          }
        })
      }
    )
  }

  removeProduct(product: any) {
    this.http.delete(this.url + product.id).subscribe(
      data => {
        this.ngOnInit()
      }, error => {
        console.log(error)
      }
    )
  }

}
