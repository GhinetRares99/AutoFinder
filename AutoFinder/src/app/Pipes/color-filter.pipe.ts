import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(vh: any[], color: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!color)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehicleColor.includes(color)
    })
  }

}
