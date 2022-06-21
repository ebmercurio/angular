import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {


  vendors!: Vendor[];
  product!: Product;
  showVerify: boolean = false;

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }


  save(): void {
    console.debug("B4:", this.product);
    this.productsvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product changed!");
        this.router.navigateByUrl("/product/list");
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
        console.debug("Vendors:", res);
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
