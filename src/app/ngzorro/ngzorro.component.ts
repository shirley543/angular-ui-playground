import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgzorroButtonComponent } from "./ngzorro-button/ngzorro-button.component";

@Component({
  selector: 'app-ngzorro',
  imports: [NgzorroButtonComponent],
  templateUrl: './ngzorro.component.html',
  styleUrl: './ngzorro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroComponent { }
