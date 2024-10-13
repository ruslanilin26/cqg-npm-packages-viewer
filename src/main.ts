import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { PackageService } from './app/services/package.service';
import {importProvidersFrom} from '@angular/core';
import { provideRouter} from '@angular/router';
import { PackagesPageComponent } from './app/components/packages-page/packages-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(PackageService),
    provideRouter([
      { path: '', redirectTo: '/packages-page', pathMatch: 'full' },
      { path: 'packages-page', component: PackagesPageComponent },
    ])
  ]
}).catch(err => console.error(err));
