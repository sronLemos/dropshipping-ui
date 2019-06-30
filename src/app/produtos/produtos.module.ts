import { HttpModule } from '@angular/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';

import { ProdutoService } from './produto.service';

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
    HttpModule,
    RouterModule
  ],
  providers: [ProdutoService],
  declarations: [ProdutosPesquisaComponent, ProdutosCadastroComponent],
  exports: [ProdutosPesquisaComponent, ProdutosCadastroComponent]
})
export class ProdutosModule { }
