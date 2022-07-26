import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClientPageComponent } from './client-page/client-page.component';
import { LoginComponent } from './components/login/login.component';
// import { SignComponent } from './components/sign/sign.component';
import { SignupComponent } from './components/signup/signup.component';
import { Role } from './models/roles.model';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'client-page',
    loadChildren: () => import('./client-page/client-page.module').then(m => m.ClientPageModule),
    canActivate: [AuthGuard], data: { roles: [Role.client] }
  },
  {
    path: 'seller-page',
    loadChildren: () => import('./seller-page/seller-page.module').then(m => m.SellerPageModule),
    canActivate: [AuthGuard], data: { roles: [Role.seller] }
  },
  { path: '**', redirectTo: 'signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
