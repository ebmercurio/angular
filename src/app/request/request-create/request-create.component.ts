import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class'
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  user!: User;
 request: Request = new Request();

  constructor(
    private systemsvc: SystemService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.request);
    this.requestsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request Updated!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
    back(): void{
      this.router.navigateByUrl("/request/list");
    }
  ngOnInit(): void {
    this.user = this.systemsvc.user;
    this.request.userId = this.systemsvc.user.id
    
    
  }


}
