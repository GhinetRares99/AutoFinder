import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminVehiclesUserID'
})
export class AdminVehiclesUserIDPipe implements PipeTransform {

  transform(vh: any[], vehicles_userid: number): any[] {
    if(!vh)
    {
      return []
    }

    if(vehicles_userid == 0){
      return vh
    }

    return vh.filter(v => {
      return v.userID == vehicles_userid
    })
  }

}
