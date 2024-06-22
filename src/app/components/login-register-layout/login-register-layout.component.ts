import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

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
  @Input() disablePrimaryButton = false;
  @Output("submit") onSubmit = new EventEmitter<string>();
  @Output() secondaryButtonOnClick = new EventEmitter<string>();
  keepLogin: boolean = false;

  keepConnectionOption = input.required<boolean>();
  secondaryButtonText = input('', {
    transform: (value: string) => value.toUpperCase()
  });
  






  submit(){
    this.onSubmit.emit();
  }
}
