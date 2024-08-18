import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DropdownSelectionComponent } from '../dropdown-selection/dropdown-selection.component';
import { DropdownListOptions } from '../../models/dropdown-list-options.interface';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [ButtonComponent, DropdownSelectionComponent],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  
  themes: DropdownListOptions[] = [
    { name: 'Neutral', isActive: true },
    { name: 'Gray', isActive: false },
    { name: 'Rose', isActive: false },
    { name: 'Orange', isActive: false },
    { name: 'Red', isActive: false },
    { name: 'Green', isActive: false },
    { name: 'Blue', isActive: false },
    { name: 'Yellow', isActive: false },
    { name: 'Violet', isActive: false },
  ]
}
