import { OnInit } from '@angular/core';
import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICompany} from "../models/company";

@Component({
  selector: 'app-company-extended',
  templateUrl: './company-extended.component.html',
  styleUrls: ['./company-extended.component.scss']
})
export class CompanyExtendedComponent implements OnInit{
  company: ICompany;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    // Не уверен, что передавать всю информацию через queryParams хорошая идея.
    // Очень хотелось бы услышать обратную связь, как лучше реализовать передачу данных по route-ам
    this.route.queryParams.subscribe((params) => this.company = params as ICompany);
  }
}
