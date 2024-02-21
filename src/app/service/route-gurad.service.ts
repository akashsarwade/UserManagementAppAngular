import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService: HardcodeAuthenticationService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;
      this.router.navigate(['login']);
    return false;
  }
}
