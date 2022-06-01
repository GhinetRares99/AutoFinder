import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuelFilter'
})
export class FuelFilterPipe implements PipeTransform {

  transform(vh: any[], fueltype: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!fueltype)
    {
      return vh
    }
    
    return vh.filter(v => {
      return v.vehicleFuelType === fueltype
    })
  }

}
