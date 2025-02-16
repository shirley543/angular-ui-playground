import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { Select } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-select-collection',
  imports: [
    FormsModule, ReactiveFormsModule,
    Select, MultiSelectModule,
    MatSelectModule, MatFormFieldModule
  ],
  templateUrl: './select-collection.component.html',
  styleUrl: './select-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCollectionComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  // For single select
  cities: City[] | undefined;
  selectedCity: City | undefined;

  // For multi select + grouped
  groupedCities!: SelectItemGroup[];
  selectedCities!: City[];

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.groupedCities = [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ];
  }

}

