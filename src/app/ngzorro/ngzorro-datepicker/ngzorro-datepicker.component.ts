import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-ngzorro-datepicker',
  imports: [FormsModule, NzDatePickerModule],
  templateUrl: './ngzorro-datepicker.component.html',
  styleUrl: './ngzorro-datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroDatepickerComponent { 
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}
