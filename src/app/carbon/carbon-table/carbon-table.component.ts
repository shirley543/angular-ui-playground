import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular/table';
import { TableModule } from 'carbon-components-angular/table';
import { CheckboxModule } from 'carbon-components-angular';
import { ButtonModule } from 'carbon-components-angular';
import { OverflowMenuDirective } from 'carbon-components-angular';

@Component({
  selector: 'app-carbon-table',
  imports: [
    TableModule,
    CheckboxModule,
    ButtonModule
  ],
  templateUrl: './carbon-table.component.html',
  styleUrl: './carbon-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarbonTableComponent {
	model = new TableModel();
	displayedCountries = ["US", "France", "Argentina", "Japan"];
	searchValue = "";

  // templateRef: TemplateRef = new TemplateRef;

	dataset = [
		[
			new TableItem({ data: "800" }),
			new TableItem({ data: "East Sadye" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" })
		],
		[
			new TableItem({ data: "500" }),
			new TableItem({ data: "Lueilwitzview" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" })
		],
		[
			new TableItem({ data: "120" }),
			new TableItem({ data: "East Arcelyside" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "France" })
		],
		[
			new TableItem({ data: "119" }),
			new TableItem({ data: "West Dylan" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Argentina" })
		],
		[
			new TableItem({ data: "54" }),
			new TableItem({ data: "Brandynberg" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Japan" })
		],
		[
			new TableItem({ data: "15" }),
			new TableItem({ data: "Stoltenbergport" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Canada" })
		],
		[
			new TableItem({ data: "12" }),
			new TableItem({ data: "Rheabury" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" })
		]
	];

	filterNodeNames(searchString: string) {
		this.searchValue = searchString;
	}

	filterCountries(countryName: string, checked: boolean) {
		if (checked) {
			this.displayedCountries.push(countryName);
		} else {
			this.displayedCountries.splice(this.displayedCountries.indexOf(countryName), 1);
		}
	}

	overflowOnClick = (event: any) => {
		event.stopPropagation();
	}

	ngOnInit() {
		this.model.header = [
			new TableHeaderItem({
				data: "Node ID"
			}),
			new TableHeaderItem({
				data: "Node name"
			}),
			new TableHeaderItem({
				data: "Node type"
			}),
			new TableHeaderItem({
				data: "Country"
			})
		];

		this.model.data = this.dataset;

		this.model.isRowFiltered = (index: number) => {
			const nodeName = this.model.row(index)[1].data;
			const countryName = this.model.row(index)[3].data;
			return !nodeName.toLowerCase().includes(this.searchValue.toLowerCase())
				|| !this.displayedCountries.includes(countryName);
		};
	}

}
