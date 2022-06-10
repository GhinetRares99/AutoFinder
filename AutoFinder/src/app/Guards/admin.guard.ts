import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  public session_user:any = []

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    
    
    if(sessionStorage.getItem('c_user'))
    {
      this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
      if(this.session_user[0].isAdmin)
      {
        return true
      }
      else
      {
        this.router.navigate([""])
        return false;
      }
    }
    else
    {
      this.router.navigate([""])
      return false;
    }
  }

}
