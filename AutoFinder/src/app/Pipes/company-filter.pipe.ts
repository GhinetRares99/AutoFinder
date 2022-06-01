import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {

  transform(vh: any[], company: string): any[] {
    if(!vh)
    {
      return []
    }

    if(!company)
    {
      return vh
    }

    return vh.filter(v => {
      return v.vehicleCompany.includes(company)
    })
  }

}
