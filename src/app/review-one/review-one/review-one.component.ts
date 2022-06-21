import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system/system.service';
import { RequestService } from 'src/app/request/request.service';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { ReviewService } from 'src/app/review/review.service';
import { Request } from '../../request/request.class';


@Component({
  selector: 'app-review-one',
  templateUrl: './review-one.component.html',
  styleUrls: ['./review-one.component.css']
})
export class ReviewOneComponent implements OnInit {

  request!: Request;
  showVerify: boolean = false;

  constructor(
    private requestsvc: RequestService,
    private reviewsvc: ReviewService,
    private systemsvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  allReview(id: number): void {
    this.requestsvc.get(id).subscribe({
      next:(res) =>{
        console.debug("Request: ", res);
        this.request = res;
      },
      error: (err) => {console.error(err);}
    })
  }

  approve(id: number, request: Request): void {
    this.reviewsvc.approve(id, request).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigateByUrl("review/list")
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

  reject(): void {
    this.showVerify = !this.showVerify;
  }

  verify(id: number, request: Request): void {
      this.reviewsvc.reject(id, request).subscribe({
        next: (res) => {
          console.debug(res);
          this.router.navigateByUrl("review/list")
        }, 
        error: (err) => {
          console.error(err);
        }
      });
  }
  ngOnInit(): void {
    let id: number = this.route.snapshot.params["id"];
    this.allReview(id);
  }

  back(): void {
    this.router.navigateByUrl("request/list");
  }
}
