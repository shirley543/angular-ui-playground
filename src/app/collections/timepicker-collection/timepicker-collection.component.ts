import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {provideMomentDateAdapter} from '@angular/material-moment-adapter';

import {MatDateFormats, provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { DatePicker } from 'primeng/datepicker';
import { IftaLabelModule } from 'primeng/iftalabel';

import { getISOWeek } from 'date-fns';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { DatePickerModule as CarbonDatePickerModule } from 'carbon-components-angular';
import { TimePickerSelectModule as CarbonTimePickerSelectModule } from 'carbon-components-angular';


// // Depending on whether rollup is used, moment needs to be imported differently.
// // Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// // syntax. However, rollup creates a synthetic default module and we thus need to import it using
// // the `default as` syntax.
// import * as _moment from 'moment';
// // tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment, Moment} from 'moment';

// const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-timepicker-collection',
  imports: [
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatDatepickerModule, MatTimepickerModule, MatInputModule, ///< Material
    DatePicker, IftaLabelModule, ///< PrimeNG
    FormsModule, NzDatePickerModule, ///< NgZorro
    CarbonDatePickerModule, CarbonTimePickerSelectModule, ///< Carbon
  ],
  providers: [
    provideNativeDateAdapter(),
    // provideNativeDateAdapter(MY_FORMATS),
    // // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // // to your app config. We provide it at the component level here, due to limitations
    // // of our example generation script.
    // provideMomentDateAdapter(MY_FORMATS),
  ],
  templateUrl: './timepicker-collection.component.html',
  styleUrl: './timepicker-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimepickerCollectionComponent { 

  // Material
  // readonly dateMaterial = new FormControl(moment());
  readonly dateMaterial = new FormControl<Date>(new Date(2025, 1));

  setMonthAndYear(normalizedMonthAndYear: Date, datepicker: MatDatepicker<any>) {
    // const ctrlValue = this.dateMaterial.value ?? moment();
    // ctrlValue.month(normalizedMonthAndYear.month());
    // ctrlValue.year(normalizedMonthAndYear.year());
    // this.dateMaterial.setValue(ctrlValue);

    // TODOss this does not work. Moment JS is also no longer maintained
    const month = normalizedMonthAndYear.getMonth();
    const year = normalizedMonthAndYear.getFullYear();
    const value = {
      month: month,
      year: year,
    };
    const newDate = new Date(year, month);
    this.dateMaterial.setValue(newDate);
    datepicker.close();
  }


  // PrimeNG
  rangeDates: Date[] | undefined;
  datetime12h: Date[] | undefined;
  datetime24h: Date[] | undefined;
  time: Date[] | undefined;
  rangedatetime12h: Date[] | undefined;

  ///< NgZorro
  dateNgZorro = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }

  ///< Carbon
  carbonTime: string = '';
  carbonPeriod: string = '';
  carbonTimeZone: string = '';

  carbonDateFormat = 'd/m/Y';
  carbonFlatpickrOptions = {
    "minDate": "2024-10-31T13:00:00.000Z",
    "maxDate": "2024-11-29T13:00:00.000Z"
  };
  carbonValueChangeCarbon(event: any) {
    console.log(event);
  }

  carbonTimePickerChange(event: any) {
    console.log(event);
  }

  carbonTimePickerSelectChange(event: any) {
    console.log(event);
  }

}
