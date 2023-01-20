import { Pipe, PipeTransform } from '@angular/core';
import {ICompany} from "../models/company";
@Pipe({
  name: 'sortCompanies'
})
// Pipe не понадобился, версия с интерфейсами находится в home component
export class SortCompaniesPipe implements PipeTransform {
  transform(companies: any[], sortBy: string, descending: boolean = true): ICompany[] {
    if (descending){
      return companies.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
    }
    else return companies.sort((a,b) => b[sortBy].localeCompare(a[sortBy]));
  }
}
