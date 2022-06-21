import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system/system.service';
import { User } from 'src/app/user/user.class';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  u!: User;
  vendors!: Vendor[];
  searchCriteria: string = "";
  sortColumn: string = "description";
  sortAsc: boolean = true;

  constructor(
    private systemsvc: SystemService,
    private vendorsvc: VendorService
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
    this.vendorsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors: ", res)
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
