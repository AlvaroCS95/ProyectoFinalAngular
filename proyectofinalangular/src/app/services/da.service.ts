import { Injectable } from '@angular/core';
import { Gasto } from '../Modelos/gasto';
import { datos }from '../data'

@Injectable({
  providedIn: 'root'
})
export class DAService {
  all_gastos: Gasto[] = datos;


  constructor() { }

  get_gastos(): Gasto[]{
    return this.all_gastos;
  }


}
