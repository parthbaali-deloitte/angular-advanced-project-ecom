import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

import { ClientPageComponent } from './client-page.component';

describe('ClientPageComponent', () => {
    let component: ClientPageComponent;
    let fixture: ComponentFixture<ClientPageComponent>;
    let routerSpy = { navigate: jasmine.createSpy('navigate') };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                { provide: Router, useValue: routerSpy }
            ],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ClientPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('check routing ', () => {
    //     component.logout()
    //     expect(routerSpy.navigate).toHaveBeenCalledWith(['/signup']);
    // })
});
