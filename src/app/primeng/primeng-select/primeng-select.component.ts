import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-primeng-select',
  imports: [FormsModule, Select],
  templateUrl: './primeng-select.component.html',
  styleUrl: './primeng-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimengSelectComponent { 
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
