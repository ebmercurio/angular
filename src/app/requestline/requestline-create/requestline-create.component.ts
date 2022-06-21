import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  product!: Product[];

  constructor(

    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId
    console.debug("B4:", this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe({
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

    this.requestline.requestId = +this.route.snapshot.params["id"];
  }

  back(): void{
    this.router.navigateByUrl(`request/lines/${this.requestline.requestId}`);
  }
}
