/**
 * Material Table Example (v19.1.3)
 * Reproduced from: https://material.angular.io/components/table/examples
 */

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomerService } from '../../services/customer.service';
import { Customer, Representative } from '../../domain/customer';
import { CommonModule } from '@angular/common';

import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-material-table',
  styleUrl: 'material-table.component.scss',
  templateUrl: 'material-table.component.html',
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatProgressBarModule, MatChipsModule,
    MatCheckboxModule
  ]
  })
export class MaterialTable implements AfterViewInit {
  // displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  displayedColumns: string[] = ['select', 'name', 'agent', 'date', 'balance', 'status', 'activity'];
  // dataSource!: MatTableDataSource<UserData>;
  dataSource!: MatTableDataSource<Customer>;

  customers!: Customer[];
  selectedCustomers!: Customer[];
  representatives!: Representative[];
  statuses!: any[];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  ngAfterViewInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      // this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    
      this.dataSource = new MatTableDataSource(this.customers);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      // Modifying sorting data accessor, as default behavior assumes column name is the data accessor,
      // which is the case for all columns except for "agent" column (data accessed via "representative.name",
      // passed in via `mat-sort-header`)
      this.dataSource.sortingDataAccessor = (item, property) => {
        // Split '.' to allow accessing property of nested object
        if (property.includes('.')) {
          const accessor = property.split('.');
          let value: any = item;
          accessor.forEach((a) => {
            value = value[a];
          });
          return value;
        }
        // Access as normal
        return (item as any)[property];
      };
    });
  }

  isRepresentative(object: any) {
    if (typeof object === 'object')
    {
      return 'name' in object && 'image' in object;
    }
    return false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Updating to use custom filter predicate to handle
    // searching by field of object for representative name
    this.dataSource.filterPredicate = (data: Customer, filter: string): boolean => {
      const dataArray = Object.values(data).map((entry) => {
        if (this.isRepresentative(entry)) {
          return (entry as Representative).name?.toLowerCase();
        } else {
          return entry.toString().toLowerCase();
        }
      });
      const dataStr = dataArray.filter((value) => value !== undefined).join("");
      return dataStr.includes(filter);
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selection = new SelectionModel<Customer>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource?.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Customer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row for ${row.name}`;
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
