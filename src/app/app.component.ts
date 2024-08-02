import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './ui/button/button.component';
import { TypographyComponent } from './ui/typography/typography.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, TypographyComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Register';

  handleClick(): void {
    alert('helou');
  }
}
