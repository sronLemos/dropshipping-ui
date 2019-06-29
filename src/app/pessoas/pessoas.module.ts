import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaService } from './pessoa.service';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [PessoaService],
  declarations: [PessoasPesquisaComponent, PessoasCadastroComponent],
  exports: [PessoasPesquisaComponent, PessoasCadastroComponent]
})
export class PessoasModule { }
