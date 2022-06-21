import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User;
  showVerify: boolean = false;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.user);
    this.usersvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("User changed!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
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
