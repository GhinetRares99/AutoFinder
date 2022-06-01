import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstRegistrationFilter'
})
export class FirstRegistrationFilterPipe implements PipeTransform {

  transform(vh: any[], firstregistrationmin: string, firstregistrationmax: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!firstregistrationmin && !firstregistrationmax){
      return vh
    }

    return vh.filter(v => {
      return v.vehicleFirstRegistration >= firstregistrationmin && v.vehicleFirstRegistration <= firstregistrationmax
    })
  }

}
