import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(vh: any[], pricemin: number, pricemax: number): any[] {
    if(!vh)
    {
      return []
    }

    if(pricemin == -1 && pricemax == -1){
      return vh
    }

    return vh.filter(v => {
      return v.vehiclePrice >= pricemin && v.vehiclePrice <= pricemax
    })

  }

}
