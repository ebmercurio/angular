import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

user!: User;
showVerify: boolean = false;
u!: User;

  constructor(
    private systemsvc: SystemService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

remove(): void {
  this.showVerify = !this.showVerify;
}
verify(): void {
  this.usersvc.remove(this.user.id).subscribe({
    next: (res) => {
      console.debug("User removed!");
      this.router.navigateByUrl("/user/list");
    },
    error: (err) => {
      console.error(err)
    }
  });
}
back(): void{
  this.router.navigateByUrl("/user/list");
}

  ngOnInit(): void {
    this.u = this.systemsvc.user;
    let id: number = +this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res) => {
        console.debug("User: ", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
