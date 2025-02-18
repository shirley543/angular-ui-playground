import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../services/customer.service';
import { Table, TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { Slider } from 'primeng/slider';
import { ProgressBar } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-primeng-table',
    templateUrl: 'primeng-table.component.html',
    standalone: true,
    imports: [TableModule, Tag, ButtonModule,IconField, InputIcon, HttpClientModule,
    CommonModule, MultiSelectModule, InputTextModule, DropdownModule, Slider, ProgressBar, FormsModule ],
    providers: [CustomerService],
    styleUrl: 'primeng-table.component.scss',
})
export class PrimengTableComponent implements OnInit{
    customers!: Customer[];

    selectedCustomers!: Customer[];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    searchValue: string = '';

    // TODOss
    customizedPrimengTable = {
        header: {
            cell: {
                background: "orange",
                color: "green",
                padding: "2px",
                hover: {
                    background: "pink",
                    color: "blue"
                },
                border: {
                    color: "purple"
                },
                selected: {
                    background: "red",
                    color: "black"
                }
            },
        },
        row: {
            background: "orange",
            color: "green",
            hover: {
                background: "pink",
                color: "blue"
            },
            selected: {
                background: "aqua",
            },
            toggle: {
                button: {
                    selected: {
                        hover: {
                            background: "red"
                        }
                    }
                }
            }
        },
        body: {
            cell: {
                border: {
                    color: "purple"
                },
                padding: "2px"
            }
        },
        // filter: {
        //     overlay: {
        //         select: {
        //             background: "pink"
        //         },
        //         popover: {
        //             background: "red"
        //         }
        //     }
        // }
    };
    

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        });

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

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warn';

            case 'renewal':
            default:
                return 'warn';
        }
    }

    clear(dt: any) {}

    filterGlobal(dt: Table, event: Event) {
        const eventTarget = event.target as HTMLInputElement;
        const value = eventTarget.value;
        dt.filterGlobal(value, 'contains')
    }
}