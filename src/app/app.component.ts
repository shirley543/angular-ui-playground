import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonCollectionComponent } from "./collections/button-collection/button-collection.component";

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectCollectionComponent } from "./collections/select-collection/select-collection.component";
import { PrimengTableComponent } from "./primeng/primeng-table/primeng-table.component";
import { MaterialTable } from "./material/material-table/material-table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonCollectionComponent, SelectCollectionComponent, PrimengTableComponent, MaterialTable],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ui-playground';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    // Material: Adding icons via register
    this.matIconRegistry.addSvgIcon(
      `my_download_icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/download.svg")
    )
  }
}
