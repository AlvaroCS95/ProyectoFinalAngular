import { Component } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';
import { DAService } from 'src/app/services/da.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  gasto!: Gasto;
  id_gasto!: number;



  constructor(

    private datosService: DAService,

    private activatedRoute: ActivatedRoute

  ) {}



  ngOnInit(): void {

    this.id_gasto = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.datosService.get_gasto(this.id_gasto).subscribe((gastoObtenido) => {
      this.gasto = gastoObtenido;
    });
  }

 editGasto(gastoEditado: Gasto){

 }


}
