import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, input } from '@angular/core';
import { fadeInOut } from '../../animations/transition-animations';

interface Alert {
  title: string,
  description: string
}

@Component({
  selector: 'app-login-register-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-register-layout.component.html',
  styleUrl: './login-register-layout.component.scss',
  animations: [fadeInOut]
})
export class LoginRegisterLayoutComponent implements OnChanges{
  @Input() pageTitle: string = "";
  @Input() loginSocial: boolean = false;
  @Input() disablePrimaryButton = false;
  @Output("submit") onSubmit = new EventEmitter<string>();
  @Output() secondaryButtonOnClick = new EventEmitter<string>();
  keepConnectionOption = input.required<boolean>();
  secondaryButtonText = input('', {
    transform: (value: string) => value.toUpperCase()
  });
  
  alertInfo = input<Alert>({
    title: '',
    description: ''
  });

  keepLogin: boolean = false;
  alertTitle: string = "";
  alertDescription: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['alertInfo']){
      this.alertTitle = this.alertInfo().title;
      this.alertDescription = this.alertInfo().description;
    }
  }
  
  submit(){
    this.onSubmit.emit();
  }
}
