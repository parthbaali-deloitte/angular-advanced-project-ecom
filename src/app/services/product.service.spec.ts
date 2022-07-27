import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { ApiService } from './api.service';
import { CartService } from './cart.service';

import { ProductService } from './product.service';

describe('ProductService', () => {
    let service: ProductService;
    let httpController: HttpTestingController
    let http: HttpClient
    let route: Router
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductService,
            ],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
        });
        service = TestBed.inject(ProductService);
        httpController = TestBed.inject(HttpTestingController)
        http = TestBed.inject(HttpClient)
        route = TestBed.inject(Router)
    });


    it('should be created', () => {
        expect(service).toBeDefined();
    });

    it('should get Product', () => {
        let testData = true
        let u_id = "1"

        service.getProduct().subscribe(
            data => {
                expect(data).toBeTrue
            }
        )

        const req = httpController.expectOne('http://localhost:3000/products/')
        expect(req.request.method).toEqual('GET')
        req.flush(testData)
    });

    it('get product by id', () => {
        const testData = true
        const inputData = {
            "id": "1",
            "product_name": "Surf Excel",
            "product_weight": "1Kg",
            "product_price": "590",
            "owner": "hw2@gmail.com",
            "count": 1
          }

        let x = service.getProductById(inputData.id).toPromise().then(
            (data) => {
                expect(data).toBeTrue
            }
        )
        const req = httpController.expectOne('http://localhost:3000/products/' + inputData.id)
        expect(req.request.method).toEqual('GET')
        req.flush(testData)
    });

    it('should add Product', () => {
        let testData = true
        let u_id = "hw2@gmail.com"
        let inputData = {
            "id": "1",
            "product_name": "Surf Excel",
            "product_weight": "1Kg",
            "product_price": "590",
            "owner": "hw2@gmail.com",
            "count": 1
          }
    
          let x = service.addProduct(inputData)
          expect(x).toBeTrue
    
        const req = httpController.expectOne('http://localhost:3000/products/')
        expect(req.request.method).toEqual('POST')
        req.flush(testData)
      });
    
      it('get product by owner', () => {
        const testData = true
        const inputData = {
            "id": "1",
            "product_name": "Surf Excel",
            "product_weight": "1Kg",
            "product_price": "590",
            "owner": "hw2@gmail.com",
            "count": 1
          }

        let x = service.getProductByOwner().toPromise().then(
            (data) => {
                expect(data).toBeTrue
            }
        )
        const req = httpController.expectOne('http://localhost:3000/products/')
        expect(req.request.method).toEqual('GET')
        req.flush(testData)
    });

    it('should update product', () => {
        const testData = true
        const inputData = {
            "id": "1",
            "product_name": "Surf Excel",
            "product_weight": "1Kg",
            "product_price": "590",
            "owner": "hw2@gmail.com",
            "count": 1
          }

        let x = service.updateProduct(inputData)
        expect(x).toBeTrue
        const req = httpController.expectOne('http://localhost:3000/products/1')
        expect(req.request.method).toEqual('PUT')
        req.flush(testData)
    });
});
