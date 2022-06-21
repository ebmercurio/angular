import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class'
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request!: Request;
  users!: User;
  product!: Product;


  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private requestlinesvc: RequestlineService
  ) { }

  submit(): void {
    this.requestsvc.review(this.request.id, this.request).subscribe({
      next: (res) => {
        console.debug("Request:", res)
        this.refresh();
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
  remove(requestline: RequestLine): void {
    this.requestlinesvc.remove(requestline.id).subscribe({
      next: (res) => {
        console.debug("Requestline Deleted!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  edit(requestline: RequestLine): void {
    this.router.navigateByUrl(`/requestline/edit/${requestline.id}`);
  }
  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.requestsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res)
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  back(): void {
    this.router.navigateByUrl("request/list");
  }

ngOnInit(): void {
  let id: number = this.route.snapshot.params["id"];
  this.requestsvc.get(id).subscribe({
    next: (res) => {
    console.debug("Request:", res);
    this.request = res;
    }
  });
}

}
