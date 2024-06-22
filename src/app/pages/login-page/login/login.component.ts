import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../../components/login-register-layout/login-register-layout.component';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm} from '../../../models/login.interface';
import { SocialLoginMethodsComponent } from '../../../components/social-login-methods/social-login-methods.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, FormInputComponent, ReactiveFormsModule, SocialLoginMethodsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup<LoginForm>;

  constructor(private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  submit(): void{
    if(this.loginForm.valid){
      
    }
  }

  navigateTo(route: string): void{
    this.router.navigate([route]);
  }
}
