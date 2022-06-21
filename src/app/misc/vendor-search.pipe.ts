import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], search: string = ""): Vendor[] {
    if(search.length == 0)
    return vendors;
    search = search.toLowerCase();
    let selectedVendors: Vendor[] = [];
    for(let vendor of vendors) {
      if(
        vendor.id.toString().includes(search)
        || vendor.code.toLowerCase().includes(search)
        || vendor.name.toLowerCase().includes(search)
        || vendor.address.toLowerCase().includes(search)
        || vendor.city.toLowerCase().includes(search)
        || vendor.state.toLowerCase().includes(search)
        || vendor.zip.toLowerCase().includes(search)
        || vendor.phone.toLowerCase().includes(search)
        || vendor.email.toLowerCase().includes(search)
      ) {
        selectedVendors.push(vendor);
      }
    }
    return selectedVendors;
  }

}
