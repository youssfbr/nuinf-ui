import { Telefone } from './../shared/telefone';
import { PessoaService } from './../shared/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../shared/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})

export class PessoaFormComponent implements OnInit {
  title: string;
  pessoa: Pessoa;
  telefone: Telefone;
  telefones: Array<Telefone> = [];
  link: string;

  constructor(private route: ActivatedRoute, private router: Router, private pessoaService: PessoaService) { }

  ngOnInit() {
    this.title = 'Cadastro de Pessoa';
    this.pessoa = new Pessoa();
    this.telefone = new Telefone();
    this.link = 'Cadastrar';

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.pessoaService.getById(<number><any>(id)).subscribe(resp => {
        this.pessoa = resp;
        this.title = `Alterando a pessoa: ${this.pessoa.nome}`;
        this.link = 'Atualizar';
      });
     }
  }


  onSubmit() {

    let observable: Observable<Pessoa>;
    let observableTel: Observable<Telefone>;

    if (this.pessoa.id) {
      observable = this.pessoaService.update({ pessoa: this.pessoa, telefone: this.telefone });
      observableTel = this.pessoaService.SalvarTelefone({ pessoa: this.pessoa, telefone: this.telefone });

      this.link = 'Atualizar';

    } else {
      observable = this.pessoaService.insert(this.pessoa);
      this.link = 'Cadastrar';
    }

    observable.subscribe(() => {
      this.router.navigate(['/pessoas']);
    });

    observableTel.subscribe(() => {
      this.router.navigate(['/pessoas']);
    });
  }

  removeTel(telefone: Telefone) {
    this.pessoaService.removeTel(telefone.id).subscribe(() => {
     this.telefones = this.telefones.filter(t => t !== telefone);
    });
    // console.log(telefone);
  }

}

