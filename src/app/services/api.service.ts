import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/user/"
  constructor(private http: HttpClient, private route: Router) { }

  login(form: any) {
    this.http.get<any>(this.url + form.email).subscribe(
      (data: any) => {
        if (data == null) {
          console.log("Failed")
        }
        else {
          console.log(data)
          if (form.password == data.password) {
            if (data.role == "client") {
              localStorage.setItem('id', data.id)
              localStorage.setItem('role', data.role)
              this.route.navigate(['client-page/home'])
            }
            if (data.role == "seller") {
              localStorage.setItem('id', data.id)
              localStorage.setItem('role', data.role)
              this.route.navigate(['seller-page/home'])
            }
          }
        }
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  addPerson(person: Person) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(person);
    console.log(body)
    return this.http.post(this.url, body, { 'headers': headers }).subscribe(
      (data: any) => {
        this.route.navigate(['/login'])
        return data
      }, (error: any) => {
        console.log(error)
      }
    );
  }

  gettoken() {
    return !!localStorage.getItem('id')
  }

  getUserById(id: any) {
    return this.http.get<Person>(this.url + id)
  }

  getRole() {
    let x = localStorage.getItem('role')
    return x
  }

}
