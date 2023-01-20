import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {UserData} from "../models/userdata";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService){
  }
  loginForm = this.fb.group({
    username : ['', [Validators.required]],
    password : ['', [Validators.required]],
  })

  ngOnInit(){
    if (localStorage.getItem('userData')){
      this.router.navigate([''])
    }
  }

  onSubmit(): void{
    console.log(this.loginForm.value)
    let userData = this.loginForm.value
    // Очень костыльно, не учитывает возможные null значения.
    // Очень хотелось бы услышать обратную связь (или получить ссылку на ресурс), как хорошо реализовывать авторизацию.
    this.authService.login(userData as UserData)
    this.router.navigate([''])
  }
}
