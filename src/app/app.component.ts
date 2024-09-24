import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzButtonModule} from "ng-zorro-antd/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NzButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = '2024-2025-full-stack-frontend';
}
