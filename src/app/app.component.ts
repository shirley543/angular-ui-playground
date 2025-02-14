import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonCollectionComponent } from "./collections/button-collection/button-collection.component";

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonCollectionComponent],
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
