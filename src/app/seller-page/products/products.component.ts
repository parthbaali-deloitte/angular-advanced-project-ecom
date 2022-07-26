import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  u_id = localStorage.getItem("id")

  displayStyle = "none"
  addForm = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    product_weight: new FormControl('', [Validators.required]),
    product_price: new FormControl('', [Validators.required])
  })

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  addProduct() {
    let final = {
      product_name: this.addForm.value.product_name,
      product_weight: this.addForm.value.product_weight,
      product_price: this.addForm.value.product_price,
      owner: this.u_id,
      count: 0
    }
    this.service.addProduct(final)
    this.closePopup()
  }
}
