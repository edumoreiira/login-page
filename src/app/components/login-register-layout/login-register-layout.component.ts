import { Component, EventEmitter, Input, Output, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-login-register-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-register-layout.component.html',
  styleUrl: './login-register-layout.component.scss',
})
export class LoginRegisterLayoutComponent {
  @Input() pageTitle: string = "";
  @Output("submit") onSubmit = new EventEmitter;





  submit(){
    this.onSubmit.emit();
  }
}
