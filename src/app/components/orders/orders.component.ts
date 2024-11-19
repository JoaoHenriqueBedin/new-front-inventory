import { Component } from '@angular/core';
import { OrderService } from '../../services/orders.service';
import { MessageService } from 'primeng/api';
import { Order, OrderItem } from '../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [MessageService]
})
export class OrderComponent {
  order: Order = {
    id: 0,
    date: '',
    status: '',
    totalAmount: 0,
    clientId: 0,
    items: [
      {
        productId: 0,
        quantity: 0
      }
    ]
  };

  constructor(
    private orderService: OrderService,
    private messageService: MessageService
  ) { }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Pedido Cadastrado com Sucesso!' });
  }

  showError(detail: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail });
  }

  createOrder() {
    if (this.order.clientId === 0 || this.order.items.length === 0 || this.order.items.some(item => item.productId === 0 || item.quantity === 0)) {
      this.showError('Todos os campos são obrigatórios!');
      return;
    }

    this.orderService.createOrder(this.order).subscribe(response => {
      this.showSuccess();
      console.log('Pedido cadastrado com sucesso:', response);
      this.resetForm();
    }, error => {
      this.showError('Erro ao cadastrar pedido!');
      console.error('Erro ao cadastrar pedido:', error);
    });
  }

  resetForm() {
    this.order = {
      id: 0,
      date: '',
      status: '',
      totalAmount: 0,
      clientId: 0,
      items: [
        {
          productId: 0,
          quantity: 0
        }
      ]
    };
  }

  addItem() {
    this.order.items.push({
      productId: 0,
      quantity: 0
    });
  }

  removeItem(index: number) {
    this.order.items.splice(index, 1);
  }
}
