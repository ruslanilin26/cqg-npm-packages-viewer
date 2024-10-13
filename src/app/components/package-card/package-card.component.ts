import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package } from '../../types/package.types';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css'],
})
export class PackageCardComponent implements OnInit {
  @Input() package: Package = {
    id: '',
    weeklyDownloads: 0,
    dependencyCount: 0,
  };

  @Input() highlightedDeps: string[] = [];
  @Output() hover = new EventEmitter<void>();
  @Output() leave = new EventEmitter<void>();

  packageName: string[] = [];

  ngOnInit(): void {
    this.packageName = this.package.id.split('/');
  }

  formatDownloads(count: number): string {
    if (count >= 1000000) {
      return Math.floor(count / 1000000) + 'M';
    } else if (count >= 1000) {
      return Math.floor(count / 1000) + 'K';
    }
    return count.toString();
  }

  isDependencyHighlighted(): boolean {
    return this.highlightedDeps.includes(this.package.id);
  }

  onMouseEnter() {
    this.hover.emit();
  }

  onMouseLeave() {
    this.leave.emit();
  }
}
