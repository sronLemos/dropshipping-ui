import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler-service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

import { ToastyModule } from 'ng2-toasty';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
  ],
  providers: [
    ErrorHandlerService,
  ]
})
export class CoreModule { }
