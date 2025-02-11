import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimengButtonComponent } from "./primeng-button/primeng-button.component";
import { PrimengToggleComponent } from "./primeng-toggle/primeng-toggle.component";
import { PrimengSliderComponent } from "./primeng-slider/primeng-slider.component";

@Component({
  selector: 'app-primeng',
  imports: [
    PrimengButtonComponent,
    PrimengToggleComponent,
    PrimengSliderComponent
],
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengComponent { }
