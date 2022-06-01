import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminEventsEventID'
})
export class AdminEventsEventIDPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
