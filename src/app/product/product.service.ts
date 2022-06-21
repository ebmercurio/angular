import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseurl: string = "http://localhost:5218/api/products"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Product[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get (`${this.baseurl}/${id}`) as Observable<Product>;
  }
  create(product: Product): Observable<Product> {
    return this.http.post(`${this.baseurl}`, product) as Observable<Product>;
  }
  change(product: Product): Observable<Product> {
    return this.http.put(`${this.baseurl}/${product.id}`, product) as Observable<Product>;
  }
  remove(id: number): Observable<Product> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Product>;
  }
}
