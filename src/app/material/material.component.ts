import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialDatePicker } from './material-datepicker/material-datepicker.component';
import { MaterialButtonComponent } from "./material-button/material-button.component";
import { MaterialSlider } from './material-slider/material-slider.component';
import { MaterialCheckbox } from "./material-checkbox/material-checkbox.component";

@Component({
  selector: 'app-material',
  imports: [
    MaterialDatePicker,
    MaterialButtonComponent,
    MaterialSlider,
    MaterialCheckbox
],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent { }
