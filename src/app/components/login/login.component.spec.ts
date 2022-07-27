import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/services/api.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: ApiService

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent]
        })
            .compileComponents();
        TestBed.configureTestingModule({
            providers: [
                ApiService,
            ],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
        });
        service = TestBed.inject(ApiService);
    });



    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('checking variable', () => {
        expect(component.hide).toBeTrue
        expect(component.loggedIn).toBeFalse
    })

    it('form invalid when empty', () => {
        expect(component.loginForm.valid).toBeFalsy();
    });



    it('email field validity', () => {
        let email = component.loginForm.controls['email'];
        expect(email.valid).toBeFalsy();
    });

    it('password field validity', () => {
        let password = component.loginForm.controls['password'];
        expect(password.valid).toBeFalsy();
    });



    it('submitting a form emits a user', () => {
        expect(component.loginForm.valid).toBeFalsy();
        component.loginForm.controls['email'].setValue("test@test.com");
        component.loginForm.controls['password'].setValue("123456789");
        expect(component.loginForm.valid).toBeTruthy();
        component.loginUser()
    });

});
