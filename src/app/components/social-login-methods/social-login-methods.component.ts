import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

type HSL = `${number} ${number}% ${number}%`;
@Component({
  selector: 'app-social-login-methods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-login-methods.component.html',
  styleUrl: './social-login-methods.component.scss'
})
export class SocialLoginMethodsComponent {
  @Input() linkPage: string = "#"
  @Input() iconPath: string = "";
  @Input() maxHeight: string = "100%";
  @Input() hslColor : HSL = "0 0% 0%"

}
