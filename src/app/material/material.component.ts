import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialDatePicker } from './datepicker/mat-datepicker.component';

@Component({
  selector: 'app-material',
  imports: [
    MaterialDatePicker
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent { }
