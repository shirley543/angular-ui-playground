import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialButtonComponent } from "../../material/material-button/material-button.component";
import { PrimengButtonComponent } from "../../primeng/primeng-button/primeng-button.component";
import { NgzorroButtonComponent } from "../../ngzorro/ngzorro-button/ngzorro-button.component";

import { MatButtonModule } from '@angular/material/button';
import { ButtonModule as PrimengButtonModule } from 'primeng/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonModule as CarbonButtonModule }  from 'carbon-components-angular';


import { MatIconModule } from '@angular/material/icon';

import { $dt } from '@primeng/themes';
import { SvgIconComponent } from "../../shared-components/svg-icon/svg-icon.component";



@Component({
  selector: 'app-button-collection',
  imports: [MaterialButtonComponent, PrimengButtonComponent, NgzorroButtonComponent,
    MatButtonModule,
    PrimengButtonModule,
    NzButtonModule,
    CarbonButtonModule,
    MatIconModule, SvgIconComponent],
  templateUrl: './button-collection.component.html',
  styleUrl: './button-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCollectionComponent { 

  // PrimeNG overrides
  customizedPrimengFlatButton = {
    borderRadius: "12px",
    paddingX: "24px",
    paddingY: "24px",
    iconOnlyWidth: "60px",
    // Font weight
    // (No option to change text on a button basis)
    labelFontWeight: "900",
    smFontSize: "24px",
    // Background
    primaryBackground: "orange",
    primaryHoverBackground: "darkorange",
    primaryActiveBackground: "orangered",
    // Border
    primaryBorderColor: "red",
    primaryHoverBorderColor: "red",
    primaryActiveBorderColor: "red",
    // Main colors
    primaryColor: "red",
    primaryHoverColor: "red",
    primaryActiveColor: "red",
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