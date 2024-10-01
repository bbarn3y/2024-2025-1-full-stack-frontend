import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NzButtonModule, NzButtonType} from "ng-zorro-antd/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NzButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  buttonNzType: NzButtonType = 'dashed';
  title = '2024-2025-full-stack-frontend';

  constructor(private router: Router) {
  }

  routeToLogin(event: MouseEvent) {
    console.log('event', event);
    this.router.navigateByUrl('/login');
  }
}
