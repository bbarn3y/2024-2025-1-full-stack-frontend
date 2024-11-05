import { Component } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {RoutingService} from "../../_services/routing.service";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.less'
})
export class LobbyComponent {

  constructor(private routingService: RoutingService,
              private userService: UserService) {
  }

  logout() {
    this.userService.removeToken();
    this.routingService.routeToLogin();
  }

}
