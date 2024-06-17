import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../../components/login-register-layout/login-register-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginRegisterLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
