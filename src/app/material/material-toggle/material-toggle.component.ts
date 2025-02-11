import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Configurable slide-toggle
 */
@Component({
  selector: 'app-material-toggle',
  templateUrl: 'material-toggle.component.html',
  styleUrl: 'material-toggle.component.scss',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule],
})
export class SlideToggleConfigurableExample {
  checked = false;
  disabled = false;
}