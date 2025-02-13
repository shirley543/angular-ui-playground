import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialButtonComponent } from "../../material/material-button/material-button.component";
import { PrimengButtonComponent } from "../../primeng/primeng-button/primeng-button.component";
import { NgzorroButtonComponent } from "../../ngzorro/ngzorro-button/ngzorro-button.component";

import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-button-collection',
  imports: [MaterialButtonComponent, PrimengButtonComponent, NgzorroButtonComponent,
    MatButtonModule,
    ButtonModule,
    NzButtonModule,
    MatIconModule
  ],
  templateUrl: './button-collection.component.html',
  styleUrl: './button-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCollectionComponent { }
