import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module'

import { ApiService } from './api.service';


describe('ApiService', () => {
  let service: ApiService;
  let httpController: HttpTestingController
  let http: HttpClient
  let route: Router
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController)
    http = TestBed.inject(HttpClient)
    route = TestBed.inject(Router)
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('add user', () => {
    const testData = true
    const inputData = {
      "name": "Parth Bali",
      "password": "1234",
      "id": "p@gmail.com",
      "role": "seller",
      "wishlist": [],
      "cart": [],
      "phone": "1234567890"
    }

    let x = service.addPerson(inputData)
    const req = httpController.expectOne('http://localhost:3000/user/')
    expect(req.request.method).toEqual('POST')
    req.flush(testData)
  });

  it('get user by id', () => {
    const testData = true
    const inputData = {
      "name": "S 1",
      "password": "qwerty",
      "id": "s1@gmail.com",
      "role": "seller",
      "wishlist": [],
      "phone": "1234567890",
      "cart": []
    }

    let x = service.getUserById(inputData.id).toPromise().then(
      (data) => {
        expect(data).toBeTrue
      }
    )
    const req = httpController.expectOne('http://localhost:3000/user/'+inputData.id)
    expect(req.request.method).toEqual('GET')
    req.flush(testData)
  });

  it('login', () => {
    const testData = true
    const inputData = {
      "email": "hw2@gmail.com",
      "password": "123455"
    }
    let id = inputData.email
    let x = service.login(inputData)
    
    const req = httpController.expectOne('http://localhost:3000/user/hw2@gmail.com')
    expect(req.request.method).toEqual('GET')
    req.flush(testData)
  });

  it('get role', () => {
    localStorage.setItem('role', "seller")
    let val = localStorage.getItem('role')


    let x = service.getRole()
    expect(x).toBe(val)
  });

  it('get token', () => {
    localStorage.setItem('id', "hw2@gmail.com")
    let val = localStorage.getItem('id')


    let x = service.gettoken()
    expect(x).toBeTrue
  });
  
});