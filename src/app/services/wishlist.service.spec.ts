import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { ApiService } from './api.service';
import { CartService } from './cart.service';
import { ProductService } from './product.service';

import { WishlistService } from './wishlist.service';

describe('WishlistService', () => {
    let service: WishlistService;
    let httpController: HttpTestingController
    let http: HttpClient
    let route: Router
    let productService: ProductService
    let apiService: ApiService
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WishlistService,
                ProductService,
                ApiService
            ],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
        });
        service = TestBed.inject(WishlistService);
        httpController = TestBed.inject(HttpTestingController)
        http = TestBed.inject(HttpClient)
        route = TestBed.inject(Router)
        apiService = TestBed.inject(ApiService);
        productService = TestBed.inject(ProductService)
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get Wishlist', () => {
        let testData = true
        localStorage.setItem("id", "hw2@gmail.com")
        let u_id = "hw2@gmail.com"
        

        service.getWishlist().subscribe(
            data => {
                expect(data).toBeTrue
            }
        )

        const req = httpController.expectOne('http://localhost:3000/user/hw2@gmail.com' )
        expect(req.request.method).toEqual('GET')
        req.flush(testData)
    });

    it('should add Wishlist', () => {
        let testData = true
        let inputData = {
            "id": "1",
            "product_name": "Surf Excel",
            "product_weight": "1Kg",
            "product_price": "590",
            "owner": "hw2@gmail.com",
            "count": 1
        }

        let x = service.addWishlist(inputData.id)
        expect(x).toBeTrue

        const req = httpController.expectOne('http://localhost:3000/products/1')
        expect(req.request.method).toEqual('GET')
        req.flush(testData)
    });
});
