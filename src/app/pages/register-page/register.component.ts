import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { InputComponent } from '../../components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SocialLoginMethodsComponent } from '../../components/social-login-methods/social-login-methods.component';
import { Router } from '@angular/router';
import { RegisterForm } from '../../models/register.interface';
import { LoginSignupService } from '../../services/login-signup.service';
import { AlertService } from '../../services/alert.service';
import { CheckInput } from '../../models/check-input.interface';
import { noSpaceAllowed, noSpecialCharacters, passwordMismatch, requiredSpecialCharacters, validBornDate } from '../../validators/register-form.validators';
import { fadeInOut } from '../../animations/transition-animations';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginRegisterLayoutComponent, InputComponent, ReactiveFormsModule, SocialLoginMethodsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [LoginSignupService],
  animations: [fadeInOut]
})
export class RegisterComponent {

  registerForm!: FormGroup<RegisterForm>;

  constructor(
    private router: Router,
    private loginSignupService: LoginSignupService,
    private alertService: AlertService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, noSpecialCharacters]),
      username: new FormControl('', [Validators.required, noSpaceAllowed]),
      dateBirth: new FormControl('', [Validators.required, Validators.pattern(''), validBornDate]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), noSpaceAllowed, requiredSpecialCharacters]),
      passwordConfirm: new FormControl('', [Validators.required, passwordMismatch])
    });
  }

  submit(): void {
    if (this.registerForm.valid){
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
    const isTouched = this.registerForm.get(eventData.formControlName)?.touched
    const isDirty = this.registerForm.get(eventData.formControlName)?.dirty
    const element = eventData.sourceElement;
    if(isInvalid && !isTouched && isDirty){
      element.classList.add("error");
    }else{
      element.classList.remove("error");
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
