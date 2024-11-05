import {RoutingService} from "../_services/routing.service";
import {UserService} from "../_services/user.service";
import {inject, Injectable} from "@angular/core";
import {CanActivateFn} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PrivateGuardService {
  constructor(private routingService: RoutingService,
              private userService: UserService) {}

  canActivate(): boolean {
    if(this.userService.isLoggedIn) {
      this.routingService.routeToLobby();
    }
    return !this.userService.isLoggedIn;
  }

}

export const publicGuard: CanActivateFn = (route, state) => {
  return inject(PrivateGuardService).canActivate();
}
