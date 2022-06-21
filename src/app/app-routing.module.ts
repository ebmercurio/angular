import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserLoginComponent } from './user/user-login/user-login.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { ReviewComponent } from './review/review/review.component';
import { ReviewOneComponent } from './review-one/review-one/review-one.component';

const routes: Routes = [
  { path: "", redirectTo: "user/login", pathMatch: "full"},
  
  { path: "user/list", component: UserListComponent},
  { path: "user/create", component: UserCreateComponent},
  { path: "user/detail/:id", component: UserDetailComponent},
  { path: "user/edit/:id", component: UserEditComponent},
  
  { path: "vendor/list", component: VendorListComponent},
  { path: "vendor/create", component: VendorCreateComponent},
  { path: "vendor/detail/:id", component: VendorDetailComponent},
  { path: "vendor/edit/:id", component: VendorEditComponent},

  { path: "product/list", component: ProductListComponent},
  { path: "product/create", component: ProductCreateComponent},
  { path: "product/detail/:id", component: ProductDetailComponent},
  { path: "product/edit/:id", component: ProductEditComponent},

  { path: "requestline/edit/:id", component: RequestlineEditComponent},
  { path: "requestline/create/:id", component: RequestlineCreateComponent},

  { path: "request/list", component: RequestListComponent},
  { path: "request/create", component: RequestCreateComponent},
  { path: "request/detail/:id", component: RequestDetailComponent},
  { path: "request/edit/:id", component: RequestEditComponent},
  { path: "request/lines/:id", component: RequestLinesComponent},

  { path: "review/list", component: ReviewComponent },
  { path: "review/one/:id", component: ReviewOneComponent },
  
  { path: "user/login", component: UserLoginComponent},
  { path: "**", component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
