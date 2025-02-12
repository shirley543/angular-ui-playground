import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-ngzorro-checkbox',
  imports: [FormsModule, NzCheckboxModule],
  templateUrl: './ngzorro-checkbox.component.html',
  styleUrl: './ngzorro-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroCheckboxComponent { 
  checked = true;
}
