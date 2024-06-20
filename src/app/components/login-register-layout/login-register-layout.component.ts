import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-login-register-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-register-layout.component.html',
  styleUrl: './login-register-layout.component.scss',
})
export class LoginRegisterLayoutComponent {
  @Input() pageTitle: string = "";
  @Input() loginSocial: boolean = false;
  @Output("submit") onSubmit = new EventEmitter;

  keepLogin: boolean = false;




  submit(){
    this.onSubmit.emit();
  }
}
