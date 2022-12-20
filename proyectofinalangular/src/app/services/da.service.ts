import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gasto } from '../Modelos/gasto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class DAService {
  private api_url = 'http://localhost:5500/listaDeGastos'; // si cosumimos un webservice o amazon webservice aqui va esa ruta
  constructor(private http: HttpClient) {}

  get_gastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.api_url);
  }

  add_gasto(gasto: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(this.api_url, gasto, httpOptions);
  }

  get_gasto(id_gasto: number): Observable<Gasto> {
    const url = `${this.api_url}/${id_gasto}`;
    return this.http.get<Gasto>(url);
  }

  editGasto(gasto: Gasto): Observable<Gasto> {
    const url = `${this.api_url}/${gasto.id}`;
    return this.http.put<Gasto>(url, gasto, httpOptions);

  }

  delete_gasto(gasto: Gasto): Observable<Gasto> {

    const url = `${this.api_url}/${gasto.id}`;
    return this.http.delete<Gasto>(url);

  }

}
