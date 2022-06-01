import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capacityFilter'
})
export class CapacityFilterPipe implements PipeTransform {

  transform(vh: any[], capacitymin: number, capacitymax: number): any[] {
    if(!vh)
    {
      return []
    }

    if(capacitymin == -1 && capacitymax == -1){
      return vh
    }

    return vh.filter(v => {
      return v.vehicleCapacity >= capacitymin && v.vehicleCapacity <= capacitymax
    })
  }

}
