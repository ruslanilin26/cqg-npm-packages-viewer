import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Package } from '../types/package.types';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.baseUrl}/packages`).pipe(
      catchError((error) => {
        this.notificationService.showMessage(
          `Error occurred: ${error.status} - ${error.message}`,
        );
        return of([]);
      }),
    );
  }

  getDependencies(id: string): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.baseUrl}/packages/${id}/dependencies`)
      .pipe(
        catchError((error) => {
          if (error.status === 404) {
            this.notificationService.showMessage(
              `Dependencies for package "${id}" not found!`,
            );
          } else {
            this.notificationService.showMessage(
              `Error occurred: ${error.status} - ${error.message}`,
            );
          }
          return of([]);
        }),
      );
  }
}
