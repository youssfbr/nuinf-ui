import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { NgxMaskModule, IConfig } from 'ngx-mask';
// import { NgxMaskModule } from 'ngx-mask-2'

import { AppComponent } from './app.component';
import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoas/pessoa-list/pessoa-list.component';
import { from } from 'rxjs';

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    PessoaFormComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
  //  NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
