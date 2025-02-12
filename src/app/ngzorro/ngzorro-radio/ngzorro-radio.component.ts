import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-ngzorro-radio',
  imports: [FormsModule, NzButtonModule, NzRadioModule],
  templateUrl: './ngzorro-radio.component.html',
  styleUrl: './ngzorro-radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroRadioComponent { 
  disabled = true;
}
