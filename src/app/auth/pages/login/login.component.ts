import { Component } from '@angular/core';
import { TypographyComponent } from '../../../ui/typography/typography.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
