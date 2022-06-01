import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminVehiclesUserID'
})
export class AdminVehiclesUserIDPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
