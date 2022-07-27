import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/person.model';
import { ApiService } from './api.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = "http://localhost:3000/user/"
  u_id = localStorage.getItem("id")
  constructor(private http: HttpClient, private productService: ProductService, private router: Router, private service: ApiService) { }


  getCart() {
    return this.http.get<Person>(this.url + this.u_id)
  }

  addCart(id: any) {
    const headers = { 'content-type': 'application/json' }
    return this.productService.getProductById(id).subscribe(
      data => {
        return this.service.getUserById(this.u_id).subscribe(
          us => {
            us.cart.push(data)
            const body = JSON.stringify(us);
            console.log(us)
            return this.http.put(this.url + this.u_id, body, { 'headers': headers }).subscribe(
              (x: any) => {
                console.log("SUCCESS")
              }, (error: any) => {
                console.log(error)
              }
            )
          }
        )
      }
    )
  }

  emptyCart() {
    return this.http.get<Person>(this.url + this.u_id).subscribe(
      data => {
        let p = data
        data.cart.splice(0, data.cart.length)
        return this.http.put(this.url + this.u_id, data).subscribe(
          x => {
          }, error => {
            console.log(error)
          }
        )
      }
    )
  }

}
