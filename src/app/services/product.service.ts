import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  u_id = localStorage.getItem("id")
  
  url = "http://localhost:3000/products/"
  constructor(private http: HttpClient, private router: Router) { }


  getProduct() {
    return this.http.get<Product[]>(this.url)
  }

  getProductById(id: any) {
    return this.http.get<Product>(this.url + id)
  }

  addProduct(product: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(product);
    console.log(body)
    this.http.post(this.url, body, { 'headers': headers }).subscribe(
      (data: any) => {
        this.router.navigate(['/seller-page/home'])
      }, (error: any) => {
        console.log(error)
      }
    );
  }

  updateProduct(product: Product) {
    return this.http.put(this.url + product.id, product).subscribe(
      data => {
        console.log(data)
      }
    )
  }
  
  getProductByOwner() {
    return this.http.get(this.url)
  }
}

