import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometresFilter'
})
export class KilometresFilterPipe implements PipeTransform {

  transform(vh: any[], kilometresmin: number, kilometresmax: number): any[] {
    if(!vh)
    {
      return []
    }

    if(kilometresmin == -1 && kilometresmax == -1){
      return vh
    }

    return vh.filter(v => {
      return v.vehicleKM >= kilometresmin && v.vehicleKM <= kilometresmax
    })
  }

}
