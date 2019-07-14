import { PaginaNaoAutorizadoComponent } from './pagina-nao-autorizado.component';
import { JwtHelper } from 'angular2-jwt';
import { ProdutoService } from './../produtos/produto.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { AuthService } from './../seguranca/auth.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler-service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

import { ToastyModule } from 'ng2-toasty';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    PaginaNaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,

    ToastyModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
  ],
  providers: [
    ProdutoService,
    PessoaService,
    ErrorHandlerService,
    AuthService,
    JwtHelper

  ]
})
export class CoreModule { }
