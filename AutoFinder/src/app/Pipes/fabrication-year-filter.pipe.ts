import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fabricationYearFilter'
})
export class FabricationYearFilterPipe implements PipeTransform {

  transform(vh: any[], fabricationyearmin: number, fabricationyearmax: number): any[] {
    if(!vh)
    {
      return []
    }

    if(fabricationyearmin == -1 && fabricationyearmax == -1){
      return vh
    }

    return vh.filter(v => {
      return v.vehicleFabricationYear >= fabricationyearmin && v.vehicleFabricationYear <= fabricationyearmax
    })

  }

}
