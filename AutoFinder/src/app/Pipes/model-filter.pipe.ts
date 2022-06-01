import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelFilter'
})
export class ModelFilterPipe implements PipeTransform {

  transform(vh: any[], model: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!model)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehicleModel.includes(model)
    })
  }

}
