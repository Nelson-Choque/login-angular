import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'default button';

  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.clickEvent.emit();
  }
}
