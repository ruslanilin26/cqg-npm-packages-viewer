import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NotificationComponent} from './components/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-notification></app-notification>
    <router-outlet></router-outlet>`,
  imports: [RouterOutlet, NotificationComponent],
})

export class AppComponent {
}
