import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class'
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;
  users!: User[];

  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
