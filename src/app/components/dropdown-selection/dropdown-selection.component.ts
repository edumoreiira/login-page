import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DropdownListOptions } from '../../models/dropdown-list-options.interface';
import { slideUpDown } from '../../animations/transition-animations';


@Component({
  selector: 'app-dropdown-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-selection.component.html',
  styleUrl: './dropdown-selection.component.scss',
  animations: [slideUpDown]
})
export class DropdownSelectionComponent {
  @Input() name: string = "Dropdown";
  @Input({ required: true }) items: DropdownListOptions[] = [];
  
  isExpanded: boolean = false;

  dropdownOnClick(event: Event){
    this.isExpanded = !this.isExpanded
    const isExpanded = this.isExpanded ? 'true' : 'false'
    const button = event.target as HTMLButtonElement;
    button.setAttribute('aria-expanded', isExpanded)
  }
}
