import {Component} from '@angular/core';
import { companies } from '../data/companies';
import {ICompany, ICompanyKeyForStringProperty} from "../models/company";
import {CompaniesService} from "../services/companies.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  companies: ICompany[] = companies;
  descending: boolean = false;
  constructor(private companiesService: CompaniesService) {
  }
  ngOnInit(): void {
    this.companiesService.getCompanies().subscribe(data => this.companies = data)
  }
  onScroll(): void{
    this.companiesService.getMoreCompanies().subscribe(data => this.companies.push(...data))
  }

  // При использовании пайпов и бесконечного скролла, при возврате обратно на страницу с компаниями
  // Происходит сортировка, учитывающая вновь добавленные элементы
  // Соответственно сбрасывается ранее установленный порядок
  // и теряются из виду элементы на раннее установленных позициях

  // Принял решение заменить пайпы на сортировку внутри компонента

  sortCompanies(sortBy: ICompanyKeyForStringProperty): void {
    this.descending = !this.descending
    if (this.descending){
      this.companies = this.companies.sort((a: ICompany,b: ICompany) => a[sortBy].localeCompare(b[sortBy]));
    }
    else this.companies = this.companies.sort((a:ICompany,b:ICompany) => b[sortBy].localeCompare(a[sortBy]));
  }
}
