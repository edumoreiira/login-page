import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DropdownListOptions } from '../../models/dropdown-list-options.interface';
import { popUp, slideUpDown } from '../../animations/transition-animations';


@Component({
  selector: 'app-dropdown-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-selection.component.html',
  styleUrl: './dropdown-selection.component.scss',
  animations: [slideUpDown, popUp]
})
export class DropdownSelectionComponent {
  @Input() name: string = "Dropdown";
  @Input({ required: true }) items: DropdownListOptions[] = [];
  @Output() clickedItem = new EventEmitter<DropdownListOptions>;
  
  isExpanded: boolean = false;

  dropdownOnClick(event: Event){
    this.isExpanded = !this.isExpanded
    const isExpanded = this.isExpanded ? 'true' : 'false'
    const button = event.target as HTMLButtonElement;
    button.setAttribute('aria-expanded', isExpanded)
  }

  @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent){
      if(this.isExpanded == true){
        const element = event.target as HTMLElement;
        const clickInsideDropdown = ( element.classList.contains("dropdown__item") || element.classList.contains("dropdown__button") );

        if(!clickInsideDropdown){
          this.isExpanded = false;
        }
      }
    }
  

  
}
