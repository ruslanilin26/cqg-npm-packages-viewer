import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() isError: boolean = false;
  message: string | null = null;
  private autoCloseTimeout: any;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.currentMessage.subscribe((msg) => {
      if (msg) {
        this.showMessage(msg);
      }
    });
  }

  ngOnDestroy(): void {
    this.clearAutoCloseTimeout();
  }

  showMessage(message: string): void {
    this.message = message;
    this.clearAutoCloseTimeout();
    this.autoCloseTimeout = setTimeout(() => {
      this.close();
    }, 3000);
  }

  close(): void {
    this.message = null;
    this.clearAutoCloseTimeout();
  }

  private clearAutoCloseTimeout(): void {
    if (this.autoCloseTimeout) {
      clearTimeout(this.autoCloseTimeout);
      this.autoCloseTimeout = null;
    }
  }
}
