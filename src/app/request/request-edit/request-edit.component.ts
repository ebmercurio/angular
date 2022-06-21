import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class'
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request!: Request;
  users!: User[];
  showVerify: boolean = false;

  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    console.debug("B4:", this.request);
    this.requestsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request Updated!");
        this.router.navigateByUrl("/request/list");
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
    this.requestsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("Request removed!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err)
      }
    });
  }

    ngOnInit(): void {
      let id: number = this.route.snapshot.params["id"];
      this.requestsvc.get(id).subscribe({
        next: (res) => {
        console.debug("Request:", res);
        this.request = res;
        }
      });
    
      this.usersvc.list().subscribe({
        next: (res) => {
          console.debug(res);
          this.users = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  back(): void{
    this.router.navigateByUrl("/request/list");
  }
}
