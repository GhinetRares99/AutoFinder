import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pollutionNormFilter'
})
export class PollutionNormFilterPipe implements PipeTransform {

  transform(vh: any[], pollutionnorm: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!pollutionnorm)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehiclePollutionNorm === pollutionnorm
    })
  }

}
