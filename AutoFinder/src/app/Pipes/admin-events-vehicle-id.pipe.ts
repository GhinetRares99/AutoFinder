import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminEventsVehicleID'
})
export class AdminEventsVehicleIDPipe implements PipeTransform {

  transform(ev: any[], events_vehicleid: number): any[] {
    if(!ev)
    {
      return []
    }

    if(events_vehicleid == 0){
      return ev
    }

    return ev.filter(e => {
      return e.vehicleID == events_vehicleid
    })
  }

}
