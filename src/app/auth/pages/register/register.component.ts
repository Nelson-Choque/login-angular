import { Component } from '@angular/core';
import { TypographyComponent } from '../../../ui/typography/typography.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
