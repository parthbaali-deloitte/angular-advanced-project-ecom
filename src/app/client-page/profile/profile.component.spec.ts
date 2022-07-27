import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/services/api.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {

    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;
    let service: ApiService


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            providers: [
                ApiService
            ],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)]
        })
            .compileComponents();
        service = TestBed.inject(ApiService)
    });



    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });



    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
