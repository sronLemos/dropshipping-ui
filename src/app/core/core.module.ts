import { ErrorHandlerService } from './error-handler-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
  ],
  providers: [
    ErrorHandlerService,
  ]
})
export class CoreModule { }
