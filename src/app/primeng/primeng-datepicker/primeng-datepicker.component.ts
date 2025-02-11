import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-primeng-datepicker',
  imports: [FormsModule, DatePicker],
  templateUrl: './primeng-datepicker.component.html',
  styleUrl: './primeng-datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengDatepickerComponent { 
  rangeDates: Date[] | undefined;
}
