import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { User } from 'src/app/user/user.class';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  user!: User;
  product!: Product[];
  requestline!: RequestLine;


  constructor(
    private productsvc: ProductService,
    private requestlinesvc: RequestlineService,
    private router: Router,
    private route: ActivatedRoute 

  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId
    console.debug("B4:", this.requestline);
    this.requestlinesvc.change(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline Created!");
        this.router.navigateByUrl(`request/lines/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
    ngOnInit(): void {
      this.productsvc.list().subscribe({
        next: (res) => {
          console.debug("Items:", res);
          this.product = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
  
     let id: number = +this.route.snapshot.params["id"];
     this.requestlinesvc.get(id).subscribe({
      next: (res) => {
        console.debug("Requestline Edited");
        this.requestline = res;
      },
      
     })
    }

    back(): void{
      this.router.navigateByUrl(`request/lines/${this.requestline.requestId}`);
    }

}
