import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimengButtonComponent } from "./primeng-button/primeng-button.component";
import { PrimengToggleComponent } from "./primeng-toggle/primeng-toggle.component";
import { PrimengSliderComponent } from "./primeng-slider/primeng-slider.component";
import { CheckboxDynamicDemo } from "./primeng-checkbox/primeng-checkbox.component";
import { PrimengRadioComponent } from "./primeng-radio/primeng-radio.component";
import { PrimengSelectComponent } from "./primeng-select/primeng-select.component";
import { PrimengDatepickerComponent } from './primeng-datepicker/primeng-datepicker.component';
import { PrimengTableComponent } from "./primeng-table/primeng-table.component";

@Component({
  selector: 'app-primeng',
  imports: [
    PrimengButtonComponent,
    PrimengToggleComponent,
    PrimengSliderComponent,
    CheckboxDynamicDemo,
    PrimengRadioComponent,
    PrimengSelectComponent,
    PrimengDatepickerComponent,
    PrimengTableComponent
],
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengComponent { }
