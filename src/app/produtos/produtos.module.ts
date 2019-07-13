import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ProdutoService } from './produto.service';
import { ProdutosRoutingModule } from './produtos-routing-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    CurrencyMaskModule,
    FormsModule,
// tslint:disable-next-line: deprecation
    HttpModule,

    ProdutosRoutingModule
  ],
  providers: [ProdutoService],
  declarations: [ProdutosPesquisaComponent, ProdutosCadastroComponent],
  exports: []
})
export class ProdutosModule { }
