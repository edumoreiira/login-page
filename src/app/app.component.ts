import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { ThemeSelectorService } from './services/theme-selector.service';
import { Theme } from './models/theme.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private themeSelectorService: ThemeSelectorService) { }

  ngOnInit(): void {
    //set default theme if no theme is set
    if(this.themeSelectorService.getLocalStorageTheme() === null) { 
      const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.themeSelectorService.setLocalStorageTheme({ name: 'neutral', isDark: browserTheme });
    }
    //apply theme when app starts
    this.themeSelectorService.applyTheme(
      this.themeSelectorService.getLocalStorageTheme() || 
      { name: 'neutral', isDark: false });
  }

  title = 'login-page';

  
}
