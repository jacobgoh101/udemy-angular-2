import {Component} from '@angular/core';
import {UsersService} from "../users.service";

@Component({selector: 'app-active-users', templateUrl: './active-users.component.html', styleUrls: ['./active-users.component.css']})
export class ActiveUsersComponent {

  constructor(private usersService : UsersService) {}

  get users() : string[] {
    return this.usersService.activeUsers;
  }
}
