import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transactions.service';
import { Transaction } from '../../models/transactions.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss'],
  providers: [TransactionService, MessageService],
})
export class ListTransactionsComponent implements OnInit {

  transactions!: Transaction[];

  constructor(private transactionService: TransactionService, private messageService: MessageService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data.transactions;
    });
  }
}
