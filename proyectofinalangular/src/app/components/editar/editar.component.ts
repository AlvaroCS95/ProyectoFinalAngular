import { Component } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';
import { DAService } from 'src/app/services/da.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [DAService],
})
export class EditarComponent {

  editableGasto: Gasto = {
    id:undefined,
    nombre:'',
    categoria:'',
    monto:0
  }
  id_gasto!: number;

  editionMode = true;


  constructor(

    private datosService: DAService,

    private activatedRoute: ActivatedRoute

  ) {}



  ngOnInit(): void {

    this.id_gasto = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.datosService.get_gasto(this.id_gasto).subscribe((gastoObtenido) => {
      this.editableGasto = gastoObtenido;
    });
  }

 editGasto(gastoEditado: Gasto){
  this.datosService.editGasto(gastoEditado).subscribe(() => {
  });
 
  window.location.href = "/"; 

 }


}
