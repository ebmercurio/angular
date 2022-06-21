import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSearchPipe } from 'src/app/misc/user-search.pipe';
import { SystemService } from 'src/app/misc/system/system.service';
import { UserService } from '../user.service';
import { skip } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private systemsvc: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }

  login(): void {
    this.message = "";
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        this.systemsvc.user = res;
        if(res.password != this.password) {
        this.message = "Password is not valid"
        } 
        skip;

      console.debug("User", res);
      this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if (err.status == 404) {
        this.message = "User and password is invalid!"
        } else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
