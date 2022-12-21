import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';

import { DAService } from 'src/app/services/da.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  gastos!: Gasto[];

  displayedColumns: string[] = ['Nombre', 'Categoria', 'Monto', 'id'];

  editableGasto: Gasto = {
    nombre: '',
    categoria: '',
    monto: 0,
    id: undefined,
  };
  editionMode = false;

  @Output() actulizarLista = new EventEmitter();

  constructor(private daService: DAService) {}

  ngOnInit(): void {
    this.get_gastos();
  }

  get_gastos() {
    this.daService.get_gastos();
  }
  add_gasto(newGastoForm: Gasto) {
    if (!newGastoForm.categoria || !newGastoForm.nombre || !newGastoForm.monto)
      return;

    this.daService.add_gasto(newGastoForm).subscribe(() => {
      //this.gastos.push(newGastoForm);
      this.actulizarLista.emit();
    });

    //window.location.href = "/";
  }
}
