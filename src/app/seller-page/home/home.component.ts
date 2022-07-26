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
  products!: Product[];
  constructor(
    // public products: ProductsModel
    private service: ProductService,
    private wishlistService: WishlistService
  ) {

  }
  ngOnInit() {
    this.service.getProduct().subscribe(
      data => {
        this.products = data
      }
    )
    this.service.getProductById("1").subscribe(
      data => {
        console.log("INIT", data)
      }
    )
  }
  // public cartflag: boolean = false;
  // public sortBy: string = '';
  // public sortOption: string = 'product_name|asc';
  // ref() {
  //   this.cartflag = false;
  //   setTimeout(() => {
  //     this.cartflag = true;
  //   }, 10)
  // }
  addProductWishlist(product: any) {
    this.wishlistService.addWishlist(product.id)
  }
  openBuyDialog(product: any) {

  }
}
