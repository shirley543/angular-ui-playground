import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primeng-radio',
  imports: [FormsModule, RadioButton, CommonModule],
  templateUrl: './primeng-radio.component.html',
  styleUrl: './primeng-radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengRadioComponent { 
  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  ngOnInit() {
    this.selectedCategory = this.categories[1];
  }
}
