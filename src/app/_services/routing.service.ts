import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) {}

  routeToLobby() {
    this.router.navigateByUrl('/inner');
  }

  routeToLogin() {
    this.router.navigateByUrl('/login');
  }

}
