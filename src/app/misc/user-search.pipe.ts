import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], search: string = ""): User[] { //pass in employee and return an array of employees
    if(search.length == 0)
      return users; // if nothing has been searched, return what has been put in 
    search = search.toLowerCase(); // turn into lower case
    let selectedUsers: User[] = []; //making the selected employees an array
    for(let user of users) {
      if(
        user.id.toString().includes(search)
          || user.firstname.toLowerCase().includes(search) 
          || user.lastname.toLowerCase().includes(search) 
          || user.email.toLowerCase().includes(search)
          || user.isAdmin.toString().includes(search)
          ) {
          selectedUsers.push(user);
        }
    }
    return selectedUsers;
  }


}
