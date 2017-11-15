import { Component, OnInit } from '@angular/core';

import { PromocaoService } from './../promocao.service';

@Component({
  selector: 'app-relatorio-promocao',
  templateUrl: './relatorio-promocao.component.html',
  styleUrls: ['./relatorio-promocao.component.css']
})
export class RelatorioPromocaoComponent implements OnInit {

  public promocoes: any;

  constructor(private service: PromocaoService) { }

  ngOnInit() {
    this.service.getPromocoes().subscribe(data => {
      this.promocoes = data;      
      }
    );    
  }

}
