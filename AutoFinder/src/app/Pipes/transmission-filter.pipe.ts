import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transmissionFilter'
})
export class TransmissionFilterPipe implements PipeTransform {

  transform(vh: any[], transmission: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!transmission)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehicleTransmission === transmission
    })
  }

}
