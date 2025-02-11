import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-primeng-toggle',
  imports: [
    ToggleSwitchModule,
    FormsModule
  ],
  templateUrl: './primeng-toggle.component.html',
  styleUrl: './primeng-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengToggleComponent { 
  checked: boolean = true;

}
