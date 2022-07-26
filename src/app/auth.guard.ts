import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api: ApiService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.api.gettoken()) {
      let userRole = this.api.getRole()
      console.log(userRole)
      if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    return false;
  }

  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //   if (this.api.gettoken()) {
  //     const userRole = this.api.getRole();
  //     console.log("USERROLE", userRole)
  //     if (route.data["role"] && route.data["role"].indexOf(userRole) === -1) {
  //       console.log("Inside", route.data["role"])
  //       this.router.navigate(['/login']);
  //       return false;
  //     }
  //     return true;
  //   }
  //   this.router.navigate(['/home']);
  //   return false;
  // }
}
