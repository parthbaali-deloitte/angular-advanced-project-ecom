import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/services/api.service';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {

    let component: PaymentComponent;

    let fixture: ComponentFixture<PaymentComponent>;

    let service: ApiService


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PaymentComponent],
            providers: [
                ApiService
            ],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
        })
            .compileComponents();
        service = TestBed.inject(ApiService)
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test total price', () => {
        component.getTotalPrice()
        expect(component.val).toBeTrue
    })
});
