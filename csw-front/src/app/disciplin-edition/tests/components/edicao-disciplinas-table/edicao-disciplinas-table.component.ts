import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EdicaoDisciplinaModel } from 'src/app/disciplin-edition/models/edicaoDisciplina.model';

@Component({
  selector: 'app-edicao-disciplinas-table',
  templateUrl: './edicao-disciplinas-table.component.html',
  styleUrls: ['./edicao-disciplinas-table.component.css']
})
export class DisciplinasTableComponent implements OnInit {
  @Input() dataSource: EdicaoDisciplinaModel[];
  id: string;
  year: number;
  semester: string;
  displayedColumns: string[] = ['id', 'year', 'semester', 'inscritos', 'descricao', 'visualizar', 'editar', 'excluir'];

  constructor(protected router: Router,
  ) {}

  ngOnInit() {
    this.id = this.dataSource[1].id;
    this.year = this.dataSource[1].year;
    this.semester = this.dataSource[1].semester;
  }

  onClickItem(subject: string) {

    //this.router.navigateByUrl("/test", { state: { test: tests } });
  }
}
