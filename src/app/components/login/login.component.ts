import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true; //for password hiding 
  loggedIn = false;
  //for storing the values from the login form
  loginForm=new FormGroup({ 
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    })

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  loginUser(){ 
    let post = this.loginForm.value;
    this.api.login(this.loginForm.value)
  }

  
  

}
