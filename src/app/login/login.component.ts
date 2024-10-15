import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../_services/client.service";
import {ConfigurationService} from "../_services/configuration.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private clientService: ClientService) {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log('useHttp', ConfigurationService.config.useHttp);
    // @todo continue!
    this.clientService.login().subscribe((response) => {
      console.log(response);
    })
  }


}
