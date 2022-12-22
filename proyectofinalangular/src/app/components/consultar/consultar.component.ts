import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';
import { DAService } from 'src/app/services/da.service';
import { GastosFirebaseService } from 'src/app/services/gastos-firebase.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
})
export class ConsultarComponent implements OnInit {
  all_gastos!: any[];
  editionMode = false;

  // variables de montos
  ingreso = 1000000;
  montoGasto = 0;
  saldo = 0;

  displayedColumns: string[] = ['nombre', 'categoria', 'monto', 'id'];

  constructor(
    private daService: DAService,
    private gastosFireBaseService: GastosFirebaseService
  ) {}

  ngOnInit(): void {
    this.get_gastos();
  }
  //test
  get_gastos() {
    this.gastosFireBaseService.get_gastos().subscribe((todos_gastos) => {
      this.all_gastos = todos_gastos;
      let montoTemporal = 0;
      todos_gastos.forEach(function (value) {
        montoTemporal += value['monto'];
      });
      this.montoGasto = montoTemporal;
      console.log('this.all_gastos __', this.all_gastos);
      this.saldo = this.ingreso - this.montoGasto;
    });
    /*let montoTemporal = 0;
    this.daService.get_gastos().subscribe((all_gastos) => {
      this.all_gastos = all_gastos;
      all_gastos.forEach(function (value) {
        montoTemporal += value.monto;
      });
      this.montoGasto = montoTemporal;

      this.saldo = this.ingreso - this.montoGasto;
    });*/
  }

  search_gasto(id: string) {
    console.log('Buscando...', id);
    /* this.contactService.get_contact_by_id(id).subscribe((contact) => {
      this.editableContact = contact;
    });*/
  }

  delete_gasto(gasto: Gasto) {
    let montoTemporal = 0;
    this.gastosFireBaseService.delete_gasto(gasto).then(() => {
      this.all_gastos = this.all_gastos.filter((c) => c.id !== gasto.id);
      this.all_gastos.forEach(function (value) {
        montoTemporal += value.monto;
      });
      this.montoGasto = montoTemporal;

      this.saldo = this.ingreso - this.montoGasto;
      this.get_gastos();
      console.log('Receta deleted successfully');
    });
    /* let montoTemporal = 0;
    this.daService.delete_gasto(gasto).subscribe(() => {
      this.all_gastos = this.all_gastos.filter((c) => c.id !== gasto.id);
      this.all_gastos.forEach(function (value) {
        montoTemporal += value.monto;
      });
      this.montoGasto = montoTemporal;

      this.saldo = this.ingreso - this.montoGasto;
    });*/
  }
}
