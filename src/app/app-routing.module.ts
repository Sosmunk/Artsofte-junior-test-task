import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CompanyExtendedComponent} from './company-extended/company-extended.component';
import {HomeComponent} from "./home/home.component";
import {AddCompanyComponent} from "./add-company/add-company.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";

let routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'company/:id',
    component: CompanyExtendedComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-company',
    component: AddCompanyComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
