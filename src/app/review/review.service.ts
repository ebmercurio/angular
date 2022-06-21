import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {


  baseurl: string = "http://localhost:5218/api/requests";

  constructor(
    private http: HttpClient
  ) { }

  approve(id: number, request: Request) : Observable<Request> {
    return this.http.put(`${this.baseurl}/Approve/${id}`, request) as Observable<Request>;
  }
  
  reject(id: number, request: Request) : Observable<Request> {
    return this.http.put(`${this.baseurl}/Reject/${id}`, request) as Observable<Request>;
  }

  review(id: number) : Observable<Request[]> {
    return this.http.get(`${this.baseurl}/review/${id}`) as Observable<Request[]>;
  }
}
