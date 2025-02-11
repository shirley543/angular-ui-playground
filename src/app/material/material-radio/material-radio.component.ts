/**
 * Material Radio Example (v19.1.3)
 * Reproduced from: https://material.angular.io/components/radio/examples
 */

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'app-material-radio',
  templateUrl: 'material-radio.component.html',
  styleUrl: 'material-radio.component.scss',
  imports: [MatRadioModule, FormsModule],
})
export class MaterialRadio {
  favoriteSeason: string = '';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}