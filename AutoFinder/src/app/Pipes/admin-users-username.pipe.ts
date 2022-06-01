import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminUsersUsername'
})
export class AdminUsersUsernamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
