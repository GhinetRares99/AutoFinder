import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doorsFilter'
})
export class DoorsFilterPipe implements PipeTransform {

  transform(vh: any[], doors: number): any[] {
    if(!vh)
    {
      return []
    }

    if(doors == -1){
      return vh
    }

    return vh.filter(v => {
      return v.vehicleDoors == doors 
    })
  }

}
