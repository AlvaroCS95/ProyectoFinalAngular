import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';

import { DAService } from 'src/app/services/da.service';
import { GastosFirebaseService } from 'src/app/services/gastos-firebase.service';

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
    id: '',
  };
  editionMode = false;

  @Output() actulizarLista = new EventEmitter();

  constructor(
    private daService: DAService,
    private gastosFireBaseService: GastosFirebaseService
  ) {}

  ngOnInit(): void {
    this.get_gastos();
  }

  get_gastos() {
    this.daService.get_gastos();
  }
  add_gasto(newGastoForm: Gasto) {
    if (!newGastoForm.categoria || !newGastoForm.nombre || !newGastoForm.monto)
      return;

    this.gastosFireBaseService
      .add_gasto(newGastoForm)
      .then((gasto) => {
        console.log(`submitted: ${JSON.stringify(gasto)}`);
        /*  this.router.navigate([`/articulo/${articulo.id}`]);*/
        this.actulizarLista.emit();
      })
      .catch((error) => console.error(error));

    /*
    this.daService.add_gasto(newGastoForm).subscribe(() => {
      //this.gastos.push(newGastoForm);
      this.actulizarLista.emit();
    });
*/
    //window.location.href = "/";
  }
}
