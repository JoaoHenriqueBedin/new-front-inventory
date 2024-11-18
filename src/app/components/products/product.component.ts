import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MessageService]
})
export class ProductComponent {
  value: any = {};



  constructor(
    private productService: ProductService,
    private messageService: MessageService

  ) { }

  showSucess() {
    this.messageService.add
    ({ severity: 'success', summary:
       'Successo', detail: 'Produto Cadastrado com Sucesso!' });
}

  showErros() {

    this.messageService.add
    ({ severity: 'error', summary:
      'Erro', detail: 'Erro ao cadastrar produto!'});
  }

  resetForm() {
    this.value = {};
  }

  createProduct() {
    const product = {
      name: this.value.name,
      price: this.value.price,
      stock: this.value.stock,
      description: this.value.description,
      imageURL: this.value.imageURL
    };

    this.productService.createProduct(product).subscribe(response => {
      this.showSucess();
      console.log('Produto cadastrado com sucesso:', response);
      this.resetForm();
    }, error => {
      this.showErros();
      console.error('Erro ao cadastrar produto:', error);
    });
  }
}
