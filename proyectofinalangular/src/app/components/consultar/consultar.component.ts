import { Component } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';
import { DAService } from 'src/app/services/da.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
})
export class ConsultarComponent {
  all_gastos: Gasto[] = [];
  editionMode = false;

  // variables de montos
  ingreso = 1000000;
  montoGasto = 0;
  saldo = 0;

  displayedColumns: string[] = ['nombre', 'categoria', 'monto', 'id'];

  constructor(private daService: DAService) {}

  ngOnInit(): void {
    this.get_gastos();
  }
  //test
  get_gastos() {
    let montoTemporal = 0;
    this.daService.get_gastos().subscribe((all_gastos) => {
      this.all_gastos = all_gastos;
      all_gastos.forEach(function(value){
        montoTemporal += value.monto;
      });
      this.montoGasto = montoTemporal;
  
      this.saldo = this.ingreso - this.montoGasto;
    });
  }

  search_gasto(id: string) {
    console.log('Buscando...', id);
    /* this.contactService.get_contact_by_id(id).subscribe((contact) => {
      this.editableContact = contact;
    });*/
  }

  delete_gasto(gasto: Gasto) {
    let montoTemporal = 0;
     this.daService.delete_gasto(gasto).subscribe(() => {
      this.all_gastos = this.all_gastos.filter((c) => c.id !== gasto.id);
      this.all_gastos.forEach(function(value){
        montoTemporal += value.monto;
      });
      this.montoGasto = montoTemporal;
  
      this.saldo = this.ingreso - this.montoGasto;

    });
  }

}
