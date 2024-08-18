import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Theme } from '../models/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  private themeSubject$ = new Subject<Theme>();

  setTheme(theme: Theme): void {
    this.themeSubject$.next(theme);
  }

  getTheme(): Subject<Theme> {
    return this.themeSubject$;
  }

  

}
