import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type HSL = `${number} ${number}% ${number}%`;
@Component({
  selector: 'app-social-login-methods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-login-methods.component.html',
  styleUrl: './social-login-methods.component.scss'
})
export class SocialLoginMethodsComponent {
  private _hslColor: HSL = "0 0% 0%"
  @Input() linkPage: string = "#"
  @Input() iconPath: string = "";
  @Input() maxHeight: string = "100%";
  @Input() set hslColor(value:string){

    if(this.isValidHSL(value)){
      this._hslColor = value as HSL;
    }else{
      console.error("Invalid HSL color parameter")
    }
  }
  
  get hslColor():HSL{
    return this._hslColor;
  }

  private isValidHSL(value: string): boolean{
    const validHSLRegex = /^\d+ \d+% \d+%$/;
    return validHSLRegex.test(value);
  }
}
