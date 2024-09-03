import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInOut } from '../../animations/transition-animations';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  animations: [fadeInOut]
})
export class CheckboxComponent {
  @Input() textLabel: string = 'Checkbox';
  @Input({ required: true }) nameAttribute = 'checkbox';
  @Output() onClick = new EventEmitter<boolean>();
  @Input() checked: boolean = false;

  handleClick(): void {
    this.checked = !this.checked;
    this.onClick.emit(this.checked);
  }


}
