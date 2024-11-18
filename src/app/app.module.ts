import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/products/product.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CustomersComponent } from './components/customers/customers.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { TableModule } from 'primeng/table';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, CustomersComponent, ListProductsComponent, ListCustomersComponent],
  imports: [BrowserModule,
            AppRoutingModule,
            ButtonModule,
            BrowserAnimationsModule,
            CardModule,
            InputTextModule,
            InputTextareaModule,
            InputMaskModule,
            FormsModule,
            InputNumberModule,
            FileUploadModule,
            ImageModule,
            HttpClientModule,
            ToastModule,
            TabMenuModule,
            TieredMenuModule,
            TableModule
          ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
