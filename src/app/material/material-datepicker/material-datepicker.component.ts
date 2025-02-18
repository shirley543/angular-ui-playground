import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DatePicker } from 'primeng/datepicker';


/** @title Basic date range picker */
@Component({
  selector: 'app-material-datepicker',
  templateUrl: 'material-datepicker.component.html',
  imports: [MatFormFieldModule, MatDatepickerModule,
    DatePicker
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDatePicker {
  rangeDates: Date[] | undefined;
}