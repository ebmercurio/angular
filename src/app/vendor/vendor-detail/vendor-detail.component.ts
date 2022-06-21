import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system/system.service';
import { User } from 'src/app/user/user.class';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  u!: User;
  vendor!: Vendor;
  showVerify: boolean = false;

  constructor(
    private systemsvc: SystemService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
    this.u = this.systemsvc.user;
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
