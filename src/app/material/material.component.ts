import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialDatePicker } from './material-datepicker/material-datepicker.component';
import { MaterialButtonComponent } from "./material-button/material-button.component";
import { MaterialSlider } from './material-slider/material-slider.component';
import { MaterialCheckbox } from "./material-checkbox/material-checkbox.component";
import { MaterialRadio } from "./material-radio/material-radio.component";
import { MaterialSelectComponent } from "./material-select/material-select.component";
import { MaterialTable } from "./material-table/material-table.component";
import { SlideToggleConfigurableExample } from "./material-toggle/material-toggle.component";

@Component({
  selector: 'app-material',
  imports: [
    MaterialDatePicker,
    MaterialButtonComponent,
    MaterialSlider,
    MaterialCheckbox,
    MaterialRadio,
    MaterialSelectComponent,
    MaterialTable,
    SlideToggleConfigurableExample
],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent { }
