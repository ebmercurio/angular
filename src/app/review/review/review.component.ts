import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Request } from '../../request/request.class'
import { SystemService } from 'src/app/misc/system/system.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  request!: Request[];

  constructor(
    private systemsvc: SystemService,
    private reviewsvc: ReviewService
  ) { }

  ngOnInit(): void {
    this.allReview(this.systemsvc.user.id);
  }

  allReview(id: number): void {
    this.reviewsvc.review(id).subscribe({
      next:(res) =>{
        console.debug("Request: ", res);
        this.request = res;
      },
      error: (err) => {console.error(err);}
    })
  }

}
