import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimengButtonComponent } from "./primeng-button/primeng-button.component";

@Component({
  selector: 'app-primeng',
  imports: [
    PrimengButtonComponent
],
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengComponent { }
