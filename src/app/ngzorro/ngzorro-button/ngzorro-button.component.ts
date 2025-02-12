import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-ngzorro-button',
  imports: [
    NzButtonModule
  ],
  templateUrl: './ngzorro-button.component.html',
  styleUrl: './ngzorro-button.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroButtonComponent { }
