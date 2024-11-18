import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MessageService } from 'primeng/api';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [MessageService]
})
export class CustomersComponent {
  value: Customer = {
    name: '',
    contact: '',
    address: '',
    cpf_cnpj: ''
  };

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService
  ) { }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Cliente Cadastrado com Sucesso!' });
  }

  showError(detail: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail });
  }

  createCustomer() {
    if (!this.value.name || !this.value.contact || !this.value.address || !this.value.cpf_cnpj) {
      this.showError('Todos os campos são obrigatórios!');
      return;
    }

    this.customerService.createCustomer(this.value).subscribe(response => {
      this.showSuccess();
      console.log('Cliente cadastrado com sucesso:', response);
      this.resetForm();
    }, error => {
      this.showError('Erro ao cadastrar cliente!');
      console.error('Erro ao cadastrar cliente:', error);
    });
  }

  resetForm() {
    this.value = {
      name: '',
      contact: '',
      address: '',
      cpf_cnpj: ''
    };
  }
}
