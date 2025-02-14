import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialButtonComponent } from "../../material/material-button/material-button.component";
import { PrimengButtonComponent } from "../../primeng/primeng-button/primeng-button.component";
import { NgzorroButtonComponent } from "../../ngzorro/ngzorro-button/ngzorro-button.component";

import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { MatIconModule } from '@angular/material/icon';

import { $dt } from '@primeng/themes';



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
export class ButtonCollectionComponent { 
  // Dt customizations
  customizedPrimengFlatButton = {

  };

  customizedPrimengStrokedButton = {
    
  };

  customizedPrimengIconButton = {

  };

  ngOnInit() {

  }
}

/**
 * Notes:
 * 
 * Material:
 * - Makes distinction between buttons (flat, stroked, raised, icon) style-wise and style override-wise
 * 
 * Primeng:
 * - Makes distinction between buttons via usage-type (primary, secondary, etc; mainly color) and style-type (main, raised, outlined, etc). Style overrides via usage-type
 * 
 * 
 */