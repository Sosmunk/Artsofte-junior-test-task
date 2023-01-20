import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  industries: string[] = ["лесоводство и лесозаготовки", "добыча угля", "производство мебели", "научные исследования и разработки", "деятельность общественных организаций"]
  constructor(private router: Router, private fb: FormBuilder){
  }
  addForm = this.fb.group({
    business_name : ['', [Validators.required, Validators.maxLength(15)]],
    industry : [null, [Validators.required]],
    in_Russia : [false]
  })
  onSubmit(): void{
    console.log(this.addForm.value)
    this.router.navigate([''])
  }
}
