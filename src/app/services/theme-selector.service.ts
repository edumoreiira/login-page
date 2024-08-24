import { Injectable } from '@angular/core';
import { Theme } from '../models/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  private readonly themeKey = 'theme';
  
  setLocalStorageTheme(theme: Theme) {
    localStorage.setItem(this.themeKey, JSON.stringify(theme));
  }

  getLocalStorageTheme(): Theme | null {
    const themeString = localStorage.getItem(this.themeKey);
    return themeString ? JSON.parse(themeString) : null;
  }

  applyTheme(theme: Theme) {
    const darkMode = theme.isDark ? ' dark' : ''
    document.body.className = theme.name + darkMode;
  }

  

}
