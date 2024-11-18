import { Component, Inject } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { MessageService } from 'primeng/api';
import { Supplier } from '../../models/supplier.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  providers: [MessageService]
})
export class SuppliersComponent {
  value: Supplier = {
    name: '',
    contact: '',
    address: '',
    cnpj: ''
  };

  constructor(
    @Inject(SupplierService) private supplierService: SupplierService,
    private messageService: MessageService
  ) { }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Fornecedor Cadastrado com Sucesso!' });
  }

  showError(detail: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail });
  }


  createSupplier() {
    if (!this.value.name || !this.value.contact || !this.value.address || !this.value.cnpj) {
      this.showError('Todos os campos são obrigatórios!');
      return;
    }
    this.supplierService.createSupplier(this.value).subscribe(response => {
      this.showSuccess();
      console.log('Fornecedor cadastrado com sucesso:', response);
      this.resetForm();
    }, error => {
      this.showError('Erro ao cadastrar fornecedor!');
      console.error('Erro ao cadastrar fornecedor:', error);
    });
  }

  resetForm() {
    this.value = {
      name: '',
      contact: '',
      address: '',
      cnpj: ''
    };
  }


}
