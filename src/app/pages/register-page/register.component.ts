import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SocialLoginMethodsComponent } from '../../components/social-login-methods/social-login-methods.component';
import { Router } from '@angular/router';
import { RegisterForm } from '../../models/register.interface';
import { LoginSignupService } from '../../services/login-signup.service';
import { AlertService } from '../../services/alert.service';
import { CheckInput } from '../../models/check-input.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, FormInputComponent, ReactiveFormsModule, SocialLoginMethodsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [LoginSignupService]
})
export class RegisterComponent {

  registerForm!: FormGroup<RegisterForm>;

  constructor(
    private router: Router,
    private loginSignupService: LoginSignupService,
    private alertService: AlertService
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(5)]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateBirth: new FormControl('', [Validators.required, Validators.pattern('')])
    });
  }

  submit(): void {
    if (this.registerForm.valid){
      if(this.registerForm.value.password !== this.registerForm.value.passwordConfirm){
        this.alertService.emitAlert({
          title: 'Senhas incompatíveis',
          description: 'As senhas informadas são distintas',
          color: 'red'
        })
        return;
      }
      this.loginSignupService.signUp(
        this.registerForm.value.username,
        this.registerForm.value.password,
        this.registerForm.value.name,
        this.registerForm.value.dateBirth,
        this.registerForm.value.email
      ).subscribe({
        next: () => {
          this.navigateTo("login")

          setTimeout(() => {
            this.alertService.emitAlert({
              title: 'Registro completo!',
              description: 'Seu usuário foi cadastrado com sucesso!',
              color: 'green'
            });
          }, 500);
        },

        error: err => {
          this.alertService.emitAlert({
            title: 'Ocorreu um erro no registro.',
            description: `${typeof err.error == 'string' ? err.error : "Erro desconhecido"}`,
            color: 'red'
          });
        }
      })
    }
  }

  isValidForm(eventData: CheckInput){
    const isInvalid = this.registerForm.get(eventData.formControlName)?.invalid
    const element = eventData.sourceElement;
    if(isInvalid && element.value.length > 0){
      element.classList.add("error");
    }else{
      element.classList.remove("error");
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
