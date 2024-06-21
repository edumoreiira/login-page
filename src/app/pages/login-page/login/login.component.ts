import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../../components/login-register-layout/login-register-layout.component';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm} from '../../../models/login.interface';
import { SocialLoginMethodsComponent } from '../../../components/social-login-methods/social-login-methods.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, FormInputComponent, ReactiveFormsModule, SocialLoginMethodsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup<LoginForm>;

  constructor(){
    
    
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit(): void{
    console.log(this.loginForm.value)
  }

  createAccount(): void{
    console.log("works")
  }
}
