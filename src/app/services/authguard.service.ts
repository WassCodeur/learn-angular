import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        stat: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuth) {
            return true;
        } else {
            this.router.navigate(['auth']);
        }
        return false;
    }
}