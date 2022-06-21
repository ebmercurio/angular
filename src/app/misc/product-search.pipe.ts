import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {


  transform(products: Product[], search: string = ""): Product[] {
    if(search.length == 0)
    return products;
    search = search.toLowerCase();
    let selectedProducts: Product[] = [];
    for(let product of products) {
      if(
        product.id.toString().includes(search)
        || product.partNbr.includes(search)
        || product.name.toLowerCase().includes(search)
        || product.unit.toLowerCase().includes(search)
      ) {
        selectedProducts.push(product);
      }
    }
    return selectedProducts;
  }
}
