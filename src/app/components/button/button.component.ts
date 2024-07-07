import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

type ButtonTypes = 'transparent' | 'successful' | 'filled';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() name: string = "Botão";
@Input() isDisabled: boolean = false;
@Input() type: ButtonTypes = 'transparent';
@Input() isExpanded: boolean = false;
@Output() onClick = new EventEmitter;

@HostBinding('class.full-width') get isActive() {
  return this.isExpanded;
}
}
