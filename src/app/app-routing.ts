import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatorioPromocaoComponent } from './relatorio-promocao/relatorio-promocao.component';
import { PromocaoDetailsComponent } from './promocao-details/promocao-details.component';

const APP_ROUTES: Routes = [
    { path: '', component: RelatorioPromocaoComponent },
    { path: 'promocao/:id', component: PromocaoDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }