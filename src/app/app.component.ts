import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialComponent } from "./material/material.component";
import { PrimengComponent } from "./primeng/primeng.component";
import { NgzorroComponent } from "./ngzorro/ngzorro.component";
import { ButtonCollectionComponent } from "./collections/button-collection/button-collection.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialComponent, PrimengComponent, NgzorroComponent, ButtonCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ui-playground';
}
