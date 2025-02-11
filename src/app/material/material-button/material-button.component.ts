import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-material-button',
  imports: [
    MatButtonModule
  ],
  templateUrl: './material-button.component.html',
  styleUrl: './material-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialButtonComponent { }
