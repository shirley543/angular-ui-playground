import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';

import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { DatePicker } from 'primeng/datepicker';

import { getISOWeek } from 'date-fns';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';



@Component({
  selector: 'app-timepicker-collection',
  imports: [
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatDatepickerModule, ///< Material
    DatePicker, ///< PrimeNG
    FormsModule, NzDatePickerModule ///< NgZorro
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './timepicker-collection.component.html',
  styleUrl: './timepicker-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimepickerCollectionComponent { 
  rangeDates: Date[] | undefined; ///< For primeng

  date = null; ///< NgZorro

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }

}
