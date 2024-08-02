import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class TypographyComponent {
  @Input() label: string = 'text default';
  @Input() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' = 'body';
  @Input() className: string = '';
}
