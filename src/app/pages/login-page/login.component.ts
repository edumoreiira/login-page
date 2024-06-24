import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm} from '../../models/login.interface';
import { SocialLoginMethodsComponent } from '../../components/social-login-methods/social-login-methods.component';
import { Router } from '@angular/router';
import { LoginSignupService } from '../../services/login-signup.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, FormInputComponent, ReactiveFormsModule, SocialLoginMethodsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginSignupService: LoginSignupService,
    private alertService: AlertService
  ){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  submit(): void{
    if(this.loginForm.valid){
      this.loginSignupService.signIn(
        this.loginForm.value.username,
        this.loginForm.value.password
      ).subscribe({
        next: () => this.alertService.emitAlert({
          title: 'Login bem sucedido!',
          description: 'Seja bem-vindo!',
          color: 'green'
        }),
        error: () => this.alertService.emitAlert({
          title: 'Erro ao autenticar',
          description: 'Usuário ou senha inválidos',
          color: 'red'
        })
      })
    }
  }

  navigateTo(route: string): void{
    this.alertService.removeAlert();
    this.router.navigate([route]);
  }
}
