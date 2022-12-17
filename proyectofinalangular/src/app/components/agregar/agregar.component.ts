import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/Modelos/gasto';
import { DAService } from 'src/app/services/da.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers:[DAService]
})
export class AgregarComponent implements OnInit {
  gastos!: Gasto[];
 
  displayedColumns: string[] = ['Nombre', 'Categoria', 'Monto', '_id'];

  editableGasto: Gasto = {
    nombre:'',
    categoria:'',
    monto:0,
    _id:undefined
  }
  editionMode = false;
 
  constructor(private daService: DAService) {}
 
  ngOnInit(): void {
    this.get_gastos();
  }
 
  get_gastos() {
    this.daService.get_gastos();
  }
  add_gasto(newGastoForm: Gasto){

  }
 
  // search_contact(id: string) {
  //   this.daService.get_contact_by_id(id).subscribe((contact) => {
  //     this.editableContact = contact;
  //   });
  // }
 
  // delete_contact(contact: Contact) {
  //   this.daService.delete_contact(contact).subscribe(() => {
  //     this.contacts = this.contacts.filter((c) => c._id !== contact._id);
  //   });
  // }
 
  // update_contact(contact: Contact) {
  //   this.daService.update_contact(contact).subscribe(() => {
  //     this.get_contacts();
  //   });
  // }
 
  // add_contact(contact: Contact): void {
  //   if (!contact.first_name || !contact.last_name || !contact.email) return;
   
  //   this.daService.add_contact(contact).subscribe((new_contact) => {
  //     this.contacts.push(new_contact);
  //   });
  // }
}
