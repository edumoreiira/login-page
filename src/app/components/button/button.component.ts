import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ButtonStatus } from '../../models/button.interface';

type ButtonTypes = 'transparent' | 'successful' | 'filled' ;
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() name: string = "Botão";
@Input() isDisabled: boolean = false;
@Input() type: ButtonTypes = 'transparent';
@Input() isExpanded: boolean = false;
@Input() minWidth: string  = 'auto';
@Input() status: ButtonStatus = 'default';
@Output() onClick = new EventEmitter;

@HostBinding('class.full-width') get isActive() {
  return this.isExpanded;
}
}
