import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import {HttpClientModule} from "@angular/common/http";
import { CompaniesHeaderComponent } from './companies-header/companies-header.component';
import { SortCompaniesPipe } from './pipes/sort-companies.pipe';
import { AppRoutingModule } from './app-routing.module';
import { CompanyExtendedComponent } from './company-extended/company-extended.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import {ReactiveFormsModule} from "@angular/forms";
import {AddCompanyComponent} from "./add-company/add-company.component";
import { LoginComponent } from './login/login.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

const mapConfig: YaConfig = {
  apikey: 'b22f4a6b-cbc7-4e61-bc57-5e3c655e90fb',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompaniesHeaderComponent,
    SortCompaniesPipe,
    CompanyExtendedComponent,
    HomeComponent,
    MapComponent,
    AddCompanyComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
