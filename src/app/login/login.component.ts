import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../_services/client.service";
import {ConfigurationService} from "../_services/configuration.service";
import {delay, of} from "rxjs";
import {UserService} from "../_services/user.service";
import {RoutingService} from "../_services/routing.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private clientService: ClientService,
              private routingService: RoutingService,
              private userService: UserService) {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log('useHttp', ConfigurationService.config.useHttp);
    if (ConfigurationService.config.useHttp) {
      this.clientService.login().subscribe((response) => {
        console.log(response);
        this.routingService.routeToLobby();
      })
    } else {
      of({ token: 'TestToken' })
        .pipe(delay(1000))
        .subscribe((response) => {
          this.userService.saveToken(response.token);
          this.routingService.routeToLobby();
        })
    }
  }


}
