import { Telefone } from './telefone';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private URL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  getAll(): Promise<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.URL).toPromise();
  }

  getById(id: number) {
    const url = `${this.URL}/${id}`;
    return this.http.get<Pessoa>(url);
  }

  insert(pessoa: Pessoa) {
    return this.http.post<Pessoa>(this.URL, pessoa);
  }

  update({ pessoa, telefone }: { pessoa: Pessoa; telefone: Telefone; }) {
    const id = pessoa.id;
    const url = `${this.URL}/${id}`;
    const urlTel = `${url}/telefones`;

    this.http.post<Telefone>(urlTel, telefone);

    return this.http.put<Pessoa>(url, pessoa);
  }

  SalvarTelefone({ pessoa, telefone }: { pessoa: Pessoa; telefone: Telefone; }) {
    const id = pessoa.id;
    const url = `${this.URL}/${id}`;
    const urlTel = `${url}/telefones`;

    return this.http.post<Telefone>(urlTel, telefone);
  }

  remove(id: number) {
    const url = `${this.URL}/${id}`;

    return this.http.delete<Pessoa>(url);
  }

  removeTel(id: number) {
    const url = `${this.URL}/${id}/${'telefones'}`;

    return this.http.delete<Telefone>(url);
  }
}
