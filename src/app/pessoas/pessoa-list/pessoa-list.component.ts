import { PessoaService } from './../shared/pessoa.service';
import { Pessoa } from '../shared/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  title: String = 'Listagem de Pessoas';
  pessoas: Pessoa[];
  pessoa: Pessoa;

  constructor(private pessoaService: PessoaService) { }

  async ngOnInit() {
    this.pessoa = new Pessoa();

    this.pessoas = await this.pessoaService.getAll();
  }

 remove(pessoa: Pessoa) {
   this.pessoaService.remove(pessoa.id).subscribe(() => {
    this.pessoas = this.pessoas.filter(p => p !== pessoa);
   });
 }

 /* calcularIdade(pessoa: Pessoa) {
  this.pessoaService.calcularIdade(pessoa);
} */

}
