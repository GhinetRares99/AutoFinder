import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerFilter'
})
export class PowerFilterPipe implements PipeTransform {

  transform(vh: any[], powermin: number, powermax: number): any[] {
    if(!vh)
    {
      return []
    }

    if(powermin == -1 && powermax == -1){
      return vh
    }

    return vh.filter(v => {
      return v.vehiclePower >= powermin && v.vehiclePower <= powermax
    })
  }

}
