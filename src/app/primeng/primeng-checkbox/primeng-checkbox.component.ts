import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primeng-checkbox',
  templateUrl: './primeng-checkbox.component.html',
  standalone: true,
  imports: [FormsModule, CheckboxModule, CommonModule]
})
export class CheckboxDynamicDemo {
  selectedCategories: any[] = [];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  ngOnInit() {
    this.selectedCategories = [this.categories[1]];
  }
}