import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminUsersUsername'
})
export class AdminUsersUsernamePipe implements PipeTransform {

  transform(us: any[], users_username: string): any[] {
    if(!us)
    {
      return []
    }

    if(!users_username){
      return us
    }

    return us.filter(u => {
      return u.userName.includes(users_username)
    })
  }

}
