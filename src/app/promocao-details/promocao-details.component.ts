import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PromocaoService } from './../promocao.service';

@Component({
  selector: 'app-promocao-details',
  templateUrl: './promocao-details.component.html',
  styleUrls: ['./promocao-details.component.css']
})
export class PromocaoDetailsComponent implements OnInit {
  
  id: string;
  promocao: any = {};
  lancamentos: any;

  constructor(
    private service: PromocaoService, 
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ) { }

  ngOnInit() {

    //Obtem o id
    this.id = this.rotaAtiva.snapshot.params['id'];    

    this.service.getPromocao(this.id).subscribe(res => {
      
      this.promocao = res;
      
      this.service.getLancamentos(this.id).subscribe(lanctos => {
        this.lancamentos = lanctos;
      });
    });

  }

}
