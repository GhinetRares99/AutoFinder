import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryOfOriginFilter'
})
export class CountryOfOriginFilterPipe implements PipeTransform {

  transform(vh: any[], countryoforigin: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!countryoforigin)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehicleOriginCountry === countryoforigin
    })
  }

}
