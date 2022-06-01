import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminUsersUserID'
})
export class AdminUsersUserIDPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
