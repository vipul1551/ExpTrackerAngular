import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthtokenService } from './authtoken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthtokenGuard implements CanActivate {

  constructor(private router : Router,private authTokenService:AuthtokenService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("AuthTokenGuard Guard Called...");
      console.log("Your authToken is => " + this.authTokenService.authToken);
      
      if(this.authTokenService.authToken == undefined || this.authTokenService.authToken == "" || this.authTokenService.authToken.length == 0){
        this.router.navigateByUrl("/login")
        return true;
      }
      
    return true;
  }
  
}
