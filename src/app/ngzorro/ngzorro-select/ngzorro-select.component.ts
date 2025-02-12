import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}
@Component({
  selector: 'app-ngzorro-select',
  imports: [FormsModule, NzSelectModule],
  templateUrl: './ngzorro-select.component.html',
  styleUrl: './ngzorro-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgzorroSelectComponent { 
  readonly listOfOption: string[] = alphabet();
  listOfSelectedValue = ['a10', 'c12'];
}
