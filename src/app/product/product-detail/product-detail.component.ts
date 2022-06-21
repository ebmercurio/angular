import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorSearchPipe } from 'src/app/misc/vendor-search.pipe';
import { User } from 'src/app/user/user.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  vendors!: Vendor[];
  product!: Product;
  showVerify: boolean = false;
  u!: User;

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  remove(): void {
    this.showVerify = !this.showVerify;
  }
  verify(): void {
    this.productsvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.debug("Product Removed");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err)
      }
    });   
  }
  back(): void {
    this.router.navigateByUrl("/product/list");
  }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe({
      next: (res) => {
        console.debug("Items:", res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    })

    let id: number = +this.route.snapshot.params["id"];
    this.productsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product: ", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
