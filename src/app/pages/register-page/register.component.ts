import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SocialLoginMethodsComponent } from '../../components/social-login-methods/social-login-methods.component';
import { Router } from '@angular/router';
import { RegisterForm } from '../../models/register.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, FormInputComponent, ReactiveFormsModule, SocialLoginMethodsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup<RegisterForm>;

  constructor(private router: Router){
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(5)]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateBirth: new FormControl('', [Validators.required, Validators.pattern('')])
    });
  }

  submit(): void{
    if(this.registerForm.valid){
      
    }
  }

  navigateTo(route: string): void{
    this.router.navigate([route]);
  }
}
