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

  displayedColumns: string[] = ['nombre', 'categoria', 'monto', 'id'];

  constructor(private daService: DAService) {}

  ngOnInit(): void {
    this.get_gastos();
  }
  //test
  get_gastos() {
    this.daService.get_gastos().subscribe((all_gastos) => {
      this.all_gastos = all_gastos;
    });
  }

  search_gasto(id: string) {
    console.log('Buscando...', id);
    /* this.contactService.get_contact_by_id(id).subscribe((contact) => {
      this.editableContact = contact;
    });*/
  }

  delete_gasto(contact: Gasto) {
    console.log('Eliminando...', contact);
    /* this.contactService.delete_contact(contact).subscribe(() => {
      this.contacts = this.contacts.filter((c) => c._id !== contact._id);
    });*/
  }
}
