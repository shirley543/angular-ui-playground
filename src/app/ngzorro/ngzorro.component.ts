import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgzorroButtonComponent } from "./ngzorro-button/ngzorro-button.component";
import { NgzorroSliderComponent } from "./ngzorro-slider/ngzorro-slider.component";
import { NgzorroToggleComponent } from "./ngzorro-toggle/ngzorro-toggle.component";

@Component({
  selector: 'app-ngzorro',
  imports: [NgzorroButtonComponent, NgzorroSliderComponent, NgzorroToggleComponent],
  templateUrl: './ngzorro.component.html',
  styleUrl: './ngzorro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroComponent { }
