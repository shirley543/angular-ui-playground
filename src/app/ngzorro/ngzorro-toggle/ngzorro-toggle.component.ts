import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-ngzorro-toggle',
  imports: [FormsModule, NzSwitchModule],
  templateUrl: './ngzorro-toggle.component.html',
  styleUrl: './ngzorro-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroToggleComponent { 
  switchValue = false;
}
