import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminEventsEventID'
})
export class AdminEventsEventIDPipe implements PipeTransform {

  transform(ev: any[], events_eventid: number): any[] {
    if(!ev)
    {
      return []
    }

    if(events_eventid == 0){
      return ev
    }

    return ev.filter(e => {
      return e.eventID == events_eventid
    })
  }
}
