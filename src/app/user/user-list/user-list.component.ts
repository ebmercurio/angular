import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  searchCriteria: string = "";
  sortColumn: string = "description";
  sortAsc: boolean = true;
  u!: User;

  constructor(
    private router: Router,
    private usersvc: UserService,
    private systemsvc: SystemService
  ) { }

  sortFn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  ngOnInit(): void {
    if(this.systemsvc.user == null) {
      this.router.navigateByUrl("user/login")
    }
    this.u = this.systemsvc.user;
    this.usersvc.list().subscribe({
      next: (res) => {
        console.debug("Users: ", res)
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
