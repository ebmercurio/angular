import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system/system.service';
import { User } from 'src/app/user/user.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  searchCriteria: string = "";
  sortColumn: string = "description";
  sortAsc: boolean = true;
  u!: User;

  constructor(
    private systemsvc: SystemService,
    private productsvc: ProductService
  ) { }

  sortFn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  ngOnInit(): void {
    this.u = this.systemsvc.user;
    this.productsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors: ", res)
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
