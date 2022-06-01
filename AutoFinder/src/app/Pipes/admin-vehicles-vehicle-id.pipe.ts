import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminVehiclesVehicleID'
})
export class AdminVehiclesVehicleIDPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
