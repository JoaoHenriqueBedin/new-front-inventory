import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.scss'],
  providers: [MessageService]
})
export class ListSuppliersComponent implements OnInit {
  suppliers: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe(data => {
      this.suppliers = data;
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar fornecedores!' });
      console.error('Erro ao carregar fornecedores:', error);
    });
  }

  onRowEditInit(supplier: Supplier) {
    console.log('Row edit initialized', supplier);
  }

  onRowEditSave(supplier: Supplier) {
    this.supplierService.updateSupplier(supplier).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Fornecedor atualizado com sucesso!' });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar fornecedor!' });
      console.error('Erro ao atualizar fornecedor:', error);
    });
  }

  onRowEditCancel(supplier: Supplier, index: number) {
    console.log('Row edit cancelled', supplier, index);
  }
}
