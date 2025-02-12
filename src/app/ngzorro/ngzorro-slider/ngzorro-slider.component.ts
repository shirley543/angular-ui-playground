import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-ngzorro-slider',
  imports: [FormsModule, NzSliderModule, NzSwitchModule],
  templateUrl: './ngzorro-slider.component.html',
  styleUrl: './ngzorro-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroSliderComponent { 
  disabled = false;
  value1 = 30;
  value2 = [20, 50];
}
