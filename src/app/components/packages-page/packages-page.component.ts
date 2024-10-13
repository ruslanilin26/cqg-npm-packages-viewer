import { Component } from '@angular/core';
import { PackageCardComponent } from '../package-card/package-card.component';
import { PackageService } from '../../services/package.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Package } from '../../types/package.types';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrls: ['./packages-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, PackageCardComponent, FilterPipe],
})
export class PackagesPageComponent {
  searchValue: string = '';
  packageList: Package[] = [];
  highlightedDeps: string[] = [];
  loading: boolean = false;

  constructor(
    private titleService: Title,
    private packageService: PackageService,
  ) {
    this.setTitle('Packages Page');
    this.loadPackages();
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  loadPackages() {
    this.loading = true;
    this.packageService.getPackages().subscribe((data: Package[]) => {
      this.packageList = data;
      this.loading = false;
    });
  }

  highlightDependencies(packageId: string) {
    this.packageService
      .getDependencies(packageId)
      .subscribe((deps: string[]) => {
        this.highlightedDeps = deps;
      });
  }

  clearHighlight() {
    this.highlightedDeps = [];
  }
}
