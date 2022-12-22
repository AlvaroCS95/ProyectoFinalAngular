import { Component } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';
import { DAService } from 'src/app/services/da.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { GastosFirebaseService } from 'src/app/services/gastos-firebase.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [DAService],
})
export class EditarComponent {
  /* editableGasto: Gasto = {
    id: undefined,
    nombre: '',
    categoria: '',
    monto: 0,
  };*/

  editableGasto: Gasto = {
    id: '',
    nombre: '',
    categoria: '',
    monto: 0,
  };
  id_gasto!: string;

  editionMode = true;

  constructor(
    private datosService: DAService,

    private activatedRoute: ActivatedRoute,
    private gastosFireBaseService: GastosFirebaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_gasto = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.gastosFireBaseService.get_gasto(this.id_gasto).then((docSnap) => {
      // this.editableGasto = { id: this.id_gasto, ...docSnap.data() };
      const data = docSnap.data();
      this.editableGasto.id = this.id_gasto;
      this.editableGasto.nombre = data ? data['nombre'] : '';
      this.editableGasto.monto = data ? data['monto'] : 0;
      this.editableGasto.categoria = data ? data['categoria'] : '';

      console.log('docSnap.data()__', docSnap.data());
    });
    console.log('this.editableGasto__', this.editableGasto);
    /* this.id_gasto = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.datosService.get_gasto(this.id_gasto).subscribe((gastoObtenido) => {
      this.editableGasto = gastoObtenido;
    });*/
  }

  editGasto(gastoEditado: Gasto) {
    this.gastosFireBaseService
      .editGasto(gastoEditado)
      .then(() => {
        this.router.navigate([`/`]);
      })
      .catch((error) => console.error(error));
    /* this.datosService.editGasto(gastoEditado).subscribe(() => {});

    window.location.href = '/';*/
  }
}
