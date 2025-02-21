import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { Select } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSelectModule } from 'ng-zorro-antd/select';

import { DropdownModule as CarbonDropdownModule, ListItem as CarbonListItem } from 'carbon-components-angular';

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-select-collection',
  imports: [
    FormsModule, ReactiveFormsModule,
    Select, MultiSelectModule,
    MatSelectModule, MatFormFieldModule,
    NzSelectModule,
    CarbonDropdownModule,
  ],
  templateUrl: './select-collection.component.html',
  styleUrl: './select-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCollectionComponent {
  // For single select
  cities: City[] | undefined;
  selectedCity = new FormControl('');

  // For multi select + grouped
  groupedCities!: SelectItemGroup[];
  selectedCities!: City[];

  // readonly listOfOption: string[] = alphabet();
  // listOfSelectedValue = ['a10', 'c12'];
  citiesCarbon!: CarbonListItem[];
  selectedCitiesCarbon!: CarbonListItem[];


  // PrimeNG overrides
  customizedPrimengSelect = {
    borderRadius: "1000px",
    paddingX: "24px",
    paddingY: "24px",

    background: "orange",
    placeholderColor: "red",
    color: "maroon",

    borderColor: "red",
    hoverBorderColor: "pink",
    focusBorderColor: "purple",

    overlayBackground: "orange",
    overlayBorderColor: "purple",

    optionColor: "green",
    optionFocusColor: "darkgreen",
    optionFocusBackground: "lightblue",
    optionGroupColor: "red",
    optionGroupFontWeight: "900",
    optionBorderRadius: "0px",

    dropdownWidth: "60px",
    dropdownColor: "red",

    listPadding: "0px",

    checkmarkColor: "red", ///< Note: Not working
  };

  ngOnInit() {

    this.citiesCarbon = [
      {
        content: 'Germany',
        value: 'de',
        items: [
          { content: 'Berlin', value: 'Berlin', selected: false, },
          { content: 'Frankfurt', value: 'Frankfurt', selected: false,  },
          { content: 'Hamburg', value: 'Hamburg', selected: false,  },
          { content: 'Munich', value: 'Munich', selected: false,  }
        ],
        selected: false,
      },
      {
        content: 'USA',
        value: 'us',
        items: [
          { content: 'Chicago', value: 'Chicago', selected: false,  },
          { content: 'Los Angeles', value: 'Los Angeles', selected: false,  },
          { content: 'New York', value: 'New York', selected: false,  },
          { content: 'San Francisco', value: 'San Francisco', selected: false,  }
        ],
        selected: false, 
      },
      {
        content: 'Japan',
        value: 'jp',
        items: [
          { content: 'Kyoto', value: 'Kyoto', selected: false,  },
          { content: 'Osaka', value: 'Osaka', selected: false,  },
          { content: 'Tokyo', value: 'Tokyo', selected: false,  },
          { content: 'Yokohama', value: 'Yokohama', selected: false,  }
        ],
        selected: false, 
      }
    ]
    
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

  selectedCarbon(event: Object) {
    console.log(event);
  }

  onCloseCarbon(event: Object) {
    console.log(event);
  }
}

