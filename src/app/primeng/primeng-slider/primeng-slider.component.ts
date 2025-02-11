import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
  selector: 'app-primeng-slider',
  imports: [
    FormsModule,
    Slider
  ],
  templateUrl: './primeng-slider.component.html',
  styleUrl: './primeng-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengSliderComponent { 
  value: number = 20;
  rangeValues: number[] = [20, 80];

}
