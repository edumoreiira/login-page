import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DropdownSelectionComponent } from '../dropdown-selection/dropdown-selection.component';
import { DropdownListOptions } from '../../models/dropdown-list-options.interface';
import { ThemeSelectorService } from '../../services/theme-selector.service';
import { Theme } from '../../models/theme.interface';
import { fadeInOut } from '../../animations/transition-animations';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [ButtonComponent, DropdownSelectionComponent],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
  animations: [fadeInOut]
})
export class ThemeSelectorComponent implements OnInit {

  isExpanded = false;
  
  themes: DropdownListOptions[] = [
    { name: 'Neutral', isActive: false },
    { name: 'Gray', isActive: false },
    { name: 'Rose', isActive: false },
    { name: 'Orange', isActive: false },
    { name: 'Red', isActive: false },
    { name: 'Green', isActive: false },
    { name: 'Blue', isActive: false },
    { name: 'Yellow', isActive: false },
    { name: 'Violet', isActive: false },
  ]

  darkMode = this.themeSelector.getLocalStorageTheme()?.isDark || false;

  constructor(private themeSelector: ThemeSelectorService) { }

  ngOnInit(): void {
    const currentThemeName = this.themeSelector.getLocalStorageTheme()?.name

    const selectedTheme = this.themes.find(theme => theme.name.toLowerCase() === currentThemeName);

    if(selectedTheme) {
      selectedTheme.isActive = true;
    }
  }

  toggleThemeMenu(event: Event) {
    const element = event.target as HTMLElement;
    event.stopPropagation();
    if (this.isExpanded === false) {
      element.style.zIndex = '100'; // Set z-index to make sure the dropdown is on top of other elements
    } else {
      element.style.zIndex = 'auto'; // Reset z-index
    }
    this.isExpanded = !this.isExpanded;
  }

  handleThemeChange(theme: DropdownListOptions){
    const selectedTheme: Theme = { name: theme.name.toLowerCase(), isDark: this.darkMode } as Theme;
    // Disable all themes list options
    this.themes.forEach(item => {
      item.isActive = false;
    });
    //Enable selected theme opt
    theme.isActive = true;

    this.changeTheme(selectedTheme)
  }

  changeTheme(theme: Theme) {
    this.themeSelector.setLocalStorageTheme(theme);
    this.themeSelector.applyTheme(theme);
  }

  toggleDarkMode() {
    const currentTheme = this.themeSelector.getLocalStorageTheme();

    this.darkMode = !this.darkMode;
    if(currentTheme) {
      currentTheme.isDark = this.darkMode;
      this.changeTheme(currentTheme);
    }
  }
  
  
  
  

  
}
