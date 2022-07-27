import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { ApiService } from './api.service';

import { CartService } from './cart.service';
import { ProductService } from './product.service';

describe('CartService', () => {
  let service: CartService;
  let httpController: HttpTestingController
  let http: HttpClient
  let route: Router
  let productService: ProductService
  let apiService: ApiService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService,
        ProductService,
        ApiService
      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
    });
    service = TestBed.inject(CartService);
    httpController = TestBed.inject(HttpTestingController)
    http = TestBed.inject(HttpClient)
    route = TestBed.inject(Router)
    apiService = TestBed.inject(ApiService);
    productService = TestBed.inject(ProductService)
  });


  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('should get Cart', () => {
    let testData = true
    localStorage.setItem("id", "hw2@gmail.com")
    let u_id = "hw2@gmail.com"
    

      service.getCart().subscribe(
        data => {
            expect(data).toBeTrue
        }
      )

    const req = httpController.expectOne('http://localhost:3000/user/'+u_id)
    expect(req.request.method).toEqual('GET')
    req.flush(testData)
  });

  it('should add Cart', () => {
    let testData = true
    let inputData = {
        "id": "1",
        "product_name": "Surf Excel",
        "product_weight": "1Kg",
        "product_price": "590",
        "owner": "hw2@gmail.com",
        "count": 1
      }

      let x = service.addCart(inputData.id)
      expect(x).toBeTrue

    const req = httpController.expectOne('http://localhost:3000/products/1')
    expect(req.request.method).toEqual('GET')
    req.flush(testData)
  });

  it('should empty Cart', () => {
    let testData = true
    let u_id = "hw2@gmail.com"
    localStorage.setItem("id", u_id)

      let x = service.emptyCart()
      expect(x).toBeTrue

    const req = httpController.expectOne('http://localhost:3000/user/'+u_id)
    expect(req.request.method).toEqual('GET')
    req.flush(testData)
  });
});
