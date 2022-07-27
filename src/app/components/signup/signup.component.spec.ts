import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/services/api.service';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let service: ApiService

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SignupComponent]
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
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('checking variable', () => {
        expect(component.hide).toBeTrue
        expect(component.signUser).toBeFalse
    })

    it('submitting a form emits a user', () => {
        expect(component.signform.valid).toBeFalsy();
        component.signform.controls['email'].setValue("test@test.com");
        component.signform.controls['password'].setValue("123456789");
        component.signform.controls['fname'].setValue("pp");
        component.signform.controls['lname'].setValue("pp");
        component.signform.controls['role'].setValue("seller");
        component.signform.controls['phone'].setValue("1234567890");
        expect(component.signform.valid).toBeTruthy();
        component.signUser()
    });
});