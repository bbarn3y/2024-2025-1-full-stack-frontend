import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCardModule} from "ng-zorro-antd/card";
import {ReactiveFormsModule} from "@angular/forms";
import { LockOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import {NzIconModule} from "ng-zorro-antd/icon";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

const zorroIcons: IconDefinition[] = [LockOutline, UserOutline];

const zorroModules = [
  NzButtonModule,
  NzCardModule,
  NzFormModule,
  NzIconModule.forChild(zorroIcons),
  NzInputModule
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ...zorroModules,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthenticationModule { }
