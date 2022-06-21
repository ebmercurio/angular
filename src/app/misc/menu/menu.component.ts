import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { User } from 'src/app/user/user.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Menu } from './menu/menu.class';


declare function navSlide(): any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  users!: User[];
  vendors!: Vendor[];
  products!: Product[];
  searchCriteria: string = "";

  menus: Menu[] = [
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("Reviews", "/review/list"),
    new Menu("Login", "/user/login"),
    new Menu("Contact", "/contact")
  ]

  constructor() { }

  ngOnInit() {
  }
  navSlide(): void {

  }



 //
//    navSlide = () => {
//      burger = document.querySelector('.burger');
//      nav = document.querySelector('.nav_links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav_active');
//     });
//}


}