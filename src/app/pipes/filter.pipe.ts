import { Pipe, PipeTransform } from '@angular/core';
import { Package } from '../types/package.types';
import { NotificationService } from '../services/notification.service';
import {HttpClient} from '@angular/common/http';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  constructor(
    private notificationService: NotificationService,
  ) {}
  transform(packageList: Package[], searchValue: string): any[] {
    if (!packageList || !searchValue) {
      return packageList;
    }
    const filteredPackageList = packageList.filter((pkg) =>
      pkg.id.toLowerCase().includes(searchValue.toLowerCase()),
    );
    if (filteredPackageList.length === 0)
      this.notificationService.showMessage(
        `No packages found by filter "${searchValue}"!`,
      );
    return filteredPackageList;
  }
}
