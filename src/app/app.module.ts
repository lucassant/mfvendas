import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RelatorioPromocaoComponent } from './relatorio-promocao/relatorio-promocao.component';

import { PromocaoService } from './promocao.service';
import { AppRoutingModule } from './app-routing';
import { PromocaoDetailsComponent } from './promocao-details/promocao-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioPromocaoComponent,
    PromocaoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [PromocaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
