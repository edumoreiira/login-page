import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { fadeInOut, popUp } from '../../animations/transition-animations';
import { Alert } from '../../models/alert.interface';
import { AlertService } from '../../services/alert.service';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';


@Component({
  selector: 'app-login-register-layout',
  standalone: true,
  imports: [CommonModule, ThemeSelectorComponent],
  templateUrl: './login-register-layout.component.html',
  styleUrls: ['./login-register-layout.component.scss', './login-register-layout--large.component.scss'],
  animations: [fadeInOut, popUp]
})
export class LoginRegisterLayoutComponent implements OnInit {
  @Input() pageTitle: string = "";
  @Input() loginSocial: boolean = false;
  @Input() disablePrimaryButton = false;
  @Output("submit") onSubmit = new EventEmitter<string>();
  @Output() secondaryButtonOnClick = new EventEmitter<string>();
  @Input() largeContent: boolean = false;
  @Input() disableAllButtons: boolean = false;
  keepConnectionOption = input<boolean>();
  secondaryButtonText = input('', {
    transform: (value: string) => value.toUpperCase()
  });
  
  alertInfo: Alert = {
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    color: 'red'
  };
  keepLogin: boolean = false;

  constructor(
    private alertService: AlertService
  ){}

  ngOnInit(): void {
    this.alertService.currentAlert.subscribe({
      next: alert => {
        this.alertInfo.title = alert.title;
        this.alertInfo.description = alert.description;
        this.alertInfo.color = alert.color;
      }
    });
  }
  
  submit(){
    this.onSubmit.emit();
  }
}
