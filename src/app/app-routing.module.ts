import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { OrderComponent } from './components/orders/orders.component';
import { TransactionComponent } from './components/transactions/transactions.component';
import { ProductComponent } from './components/products/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ListSuppliersComponent } from './components/list-suppliers/list-suppliers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'create-products', component: ProductComponent},
  { path: 'products', component: ListProductsComponent},

  { path: 'orders', component: ListOrdersComponent },
  { path: 'transactions', component: ListTransactionsComponent },

  {path: 'create-client', component: CustomersComponent},
  {path: 'clients', component: ListCustomersComponent},

  {path: 'create-supplier', component: SuppliersComponent},
  {path: 'suppliers', component: ListSuppliersComponent},

  { path: 'create-order', component: OrderComponent },
  { path: 'create-transaction', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
