import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminUsersUserID'
})
export class AdminUsersUserIDPipe implements PipeTransform {

  transform(us: any[], users_userid: number): any[] {
    if(!us)
    {
      return []
    }

    if(users_userid == 0){
      return us
    }

    return us.filter(u => {
      return u.userID == users_userid
    })
  }

}
