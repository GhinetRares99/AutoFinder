import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminVehiclesVehicleID'
})
export class AdminVehiclesVehicleIDPipe implements PipeTransform {

  transform(vh: any[], vehicles_vehicleid: number): any[] {
    if(!vh)
    {
      return []
    }

    if(vehicles_vehicleid == 0){
      return vh
    }

    return vh.filter(v => {
      return v.vehicleID == vehicles_vehicleid
    })
  }

}
