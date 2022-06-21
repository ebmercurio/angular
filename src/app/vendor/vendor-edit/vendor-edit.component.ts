import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor;
  showVerify: boolean = false;

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  save(): void {
    console.debug("B4:", this.vendor);
    this.vendorsvc.change(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor changed!");
        this.router.navigateByUrl("/vendor/list");
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
    this.vendorsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.debug("Vendor Removed");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err)
      }
    });   
  }
  back(): void {
    this.router.navigateByUrl("/vendor/list");
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.vendorsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor: ", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
