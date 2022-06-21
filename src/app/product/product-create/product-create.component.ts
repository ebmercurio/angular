import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  product: Product = new Product();
  vendors!: Vendor[];

  constructor(
    private productsvc: ProductService,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  save(): void {
    console.debug("B4:", this.product);
    this.productsvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product created!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
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
  }

  back(): void{
    this.router.navigateByUrl("/product/list");
  }
}

