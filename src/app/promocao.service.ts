import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class PromocaoService {

  private basePath: string = 'http://189.89.173.146:8036/relatorios/public/';

  constructor(private http: Http) { }

  getPromocoes(){
    return this.http.get(this.basePath+'promocoes').map((res:Response) => res.json());
  }

  getPromocao(id){
    return this.http.get(this.basePath+'promocao/'+id).map((res:Response) => res.json());
  }

  getLancamentos(id){
    return this.http.get(this.basePath+'lancamentos/'+id).map((res:Response) => res.json());
  }
}
