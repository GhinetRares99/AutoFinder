import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registeredFilter'
})
export class RegisteredFilterPipe implements PipeTransform {

  transform(vh: any[], registered: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!registered)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehicleRegistered === registered
    })
  }

}
