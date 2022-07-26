import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {


  val = 0
  prof!: number
  tax!: number
  person!: Person
  product: any[] = []
  u_id = localStorage.getItem("id")
  url = "http://localhost:3000/user/"
  constructor(private service: ApiService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.productService.getProductByOwner().subscribe(
      (data: any) => {
        data.forEach((v: Product, i: any) => {
          if (v.owner == this.u_id) {
            let c = v.count;
            this.val = this.val + c * parseInt(v.product_price)
            console.log("VAL", c*parseInt(v.product_price))
            this.product.push(v)
          }
        })
        this.prof = this.val*0.6
      }
    )
    console.log("PRODUCT", this.product)
    // this.getTotalPrice(this.product)
  }
  
  getUserInfo() {
    this.service.getUserById(this.u_id).subscribe(
      data => {
        this.person = data
      }
    )
  }
}
