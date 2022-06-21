import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../request/request.class'

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], search: string = ""): Request[] {
    if(search.length == 0)
    return requests;
    search = search.toLowerCase();
    let selectedRequests: Request[] = [];
    for(let request of requests) {
      if(
        request.id.toString().includes(search)
          || request.description.toLowerCase().includes(search)
          || request.status.toLowerCase().includes(search)
          || request.total.toString().toLowerCase().includes(search)
          || request.user.username.toLowerCase().includes(search)
      ) {
        selectedRequests.push(request)
      }
    }
    return selectedRequests;
  }
}
