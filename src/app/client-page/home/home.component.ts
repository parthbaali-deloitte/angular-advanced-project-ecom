import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  u_id = localStorage.getItem("id")
  user!: String
  products!: Product[];
  searchName: string = ''
  product_name = ''

  constructor(
    // public products: ProductsModel
    private service: ProductService,
    private wishlistService: WishlistService,
    private apiService: ApiService,
    private searchService: SearchService
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

    this.apiService.getUserById(this.u_id).subscribe(
      data => {
        this.user = data.name
      }
    )

    this.searchService.searchString$.subscribe(
      data => {
        this.searchName = data
      })
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

  onNameFilter() {
    this.searchService.setSearchString(this.product_name)
    console.log(this.product_name)
  }

  onNameFilterClear() {
    this.product_name = '';
    this.searchService.setSearchString('')
    console.log(this.product_name)
  }

}
