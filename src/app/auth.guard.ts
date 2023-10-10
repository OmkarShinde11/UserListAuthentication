import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { rejects } from 'assert';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger;
    return this.authService.user_token.pipe(map((user=>{
      let auth=user?true:false;
      if(auth){
        return this.router.createUrlTree(['/user'])
      }
      return true;
    })))
    // return new Promise((resolve,reject)=>{
    //   if(this.authService.isAuthAuthenticate()){
    //     this.router.createUrlTree(['/user'])
    //     reject(false);
    //   }
    //   else{
    //     resolve(true)
    //   }
    // })
  }
  
}
