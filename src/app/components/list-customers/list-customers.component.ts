import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MessageService } from 'primeng/api';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
  providers: [CustomerService, MessageService],
})
export class ListCustomersComponent implements OnInit {

  customers!: Customer[];
  clonedCustomers: { [s: string]: Customer } = {};

  constructor(private customerService: CustomerService, private messageService: MessageService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  onRowEditInit(customer: Customer) {
    if (customer.id !== undefined) {
      this.clonedCustomers[customer.id.toString()] = { ...customer };
    }
  }

  onRowEditSave(customer: Customer) {
    if (customer.id !== undefined && customer.name && customer.contact && customer.address && customer.cpf_cnpj) {
      this.customerService.updateCustomer(customer).subscribe(() => {
        if (customer.id !== undefined) {
          delete this.clonedCustomers[customer.id.toString()];
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Customer updated successfully' });
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' });
    }
  }

  onRowEditCancel(customer: Customer, index: number) {
    if (customer.id !== undefined) {
      this.customers[index] = this.clonedCustomers[customer.id.toString()];
      delete this.clonedCustomers[customer.id.toString()];
    }
  }
}
