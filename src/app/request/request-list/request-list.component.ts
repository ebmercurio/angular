import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests!: Request[];
  searchCriteria: string = "";
  sortColumn: string = "description";
  sortAsc: boolean = true;

  constructor(
    private requestsvc: RequestService,
    private router: Router
  ) { }

  sortFn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
    this.sortAsc = true;
  }

  ngOnInit(): void {
    this.requestsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  back(): void{
    this.router.navigateByUrl("/request/list");
  }

}
