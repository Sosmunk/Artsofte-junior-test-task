import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {ICompany} from "../models/company";

@Injectable({providedIn : "root"})
export class CompaniesService {

  constructor(private http: HttpClient) {
  }

  private companyData : Observable<ICompany[]>

  getCompanies(): Observable<ICompany[]>{
    if (this.companyData){
      return this.companyData
    }
    this.companyData = this.http.get<ICompany[]>("https://random-data-api.com/api/company/random_company", {
      params: new HttpParams().append('size', 10)
    })
    .pipe(shareReplay(1))
    return this.companyData
  }

  getMoreCompanies(): Observable<ICompany[]>{
    return this.http.get<ICompany[]>("https://random-data-api.com/api/company/random_company", {
      params: new HttpParams().append('size', 10)
    })
      .pipe(shareReplay(1))
  }
}
