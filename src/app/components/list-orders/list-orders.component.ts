import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orders.service';
import { Order } from '../../models/order.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss'],
  providers: [OrderService, MessageService],
})
export class ListOrdersComponent implements OnInit {

  orders!: Order[];
  clonedOrders: { [s: string]: Order } = {};

  constructor(private orderService: OrderService, private messageService: MessageService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  onRowEditInit(order: Order) {
    this.clonedOrders[order.id] = { ...order };
  }

  onRowEditSave(order: Order) {
    if (order.id && order.clientId && order.date && order.status && order.totalAmount) {
      this.orderService.updateOrder(order).subscribe(() => {
        delete this.clonedOrders[order.id];
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order updated successfully' });
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' });
    }
  }

  onRowEditCancel(order: Order, index: number) {
    this.orders[index] = this.clonedOrders[order.id];
    delete this.clonedOrders[order.id];
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== orderId);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order deleted successfully' });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting order' });
    });
  }
}
