import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Range slider
 */
@Component({
  selector: 'app-material-slider',
  templateUrl: 'material-slider.component.html',
  styleUrl: 'material-slider.component.scss',
  imports: [MatSliderModule],
})
export class MaterialSlider {}