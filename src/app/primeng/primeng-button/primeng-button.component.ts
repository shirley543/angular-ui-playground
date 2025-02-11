import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-primeng-button',
  imports: [
    ButtonModule
  ],
  templateUrl: './primeng-button.component.html',
  styleUrl: './primeng-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengButtonComponent { }
