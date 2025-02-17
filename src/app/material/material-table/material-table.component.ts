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
    MatProgressBarModule, MatChipsModule
  ]
  })
export class MaterialTable implements AfterViewInit {
  // displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  displayedColumns: string[] = ['name', 'agent', 'date', 'balance', 'status', 'activity'];
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
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
