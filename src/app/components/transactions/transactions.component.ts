import { Component } from '@angular/core';
import { TransactionService } from '../../services/transactions.service';
import { MessageService } from 'primeng/api';
import { Transaction } from '../../models/transactions.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  providers: [MessageService]
})
export class TransactionComponent {
  transaction: Transaction = {
    productId: 0,
    quantity: 0,
    transactionType: '',
    transactionDate: '',
    orderId: 0
  };

  constructor(
    private transactionService: TransactionService,
    private messageService: MessageService
  ) { }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Transação Cadastrada com Sucesso!' });
  }

  showError(detail: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail });
  }

  createTransaction() {
    if (this.transaction.productId === 0 || this.transaction.quantity === 0 || this.transaction.transactionType === '' || this.transaction.transactionDate === '' || this.transaction.orderId === 0) {
      this.showError('Todos os campos são obrigatórios!');
      return;
    }

    this.transactionService.createTransaction(this.transaction).subscribe(response => {
      this.showSuccess();
      console.log('Transação cadastrada com sucesso:', response);
      this.resetForm();
    }, error => {
      this.showError('Erro ao cadastrar transação!');
      console.error('Erro ao cadastrar transação:', error);
    });
  }

  resetForm() {
    this.transaction = {
      productId: 0,
      quantity: 0,
      transactionType: '',
      transactionDate: '',
      orderId: 0
    };
  }
}
