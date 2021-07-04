import { Component, OnInit } from '@angular/core';
import { TestModel } from '../models/test.model';
import { EvaluationsService } from '../services/evaluations.service';
import { EdicaoDisciplinaModel } from '../models/edicaoDisciplina.model';


const ELEMENT_DATA: EdicaoDisciplinaModel[] = [
  {year: 2021, semester: '01',  id: 'P2132131', active: true, subscribers: [], version: 0 },
  {year: 2019, semester: '01',  id: 'P32', active: true, subscribers: [], version: 0 },
  {year: 2022, semester: '01',  id: '21321321P3', active: true, subscribers: [], version: 0 },
  {year: 2020, semester: '02',  id: 'Pewew2' ,active: true, subscribers: [], version: 0 },
  {year: 2018, semester: '02',  id: 'Pwewew1' ,active: true, subscribers: [], version: 0 },
  {year: 2017, semester: '01',  id: '423dsaasweP3', active: true, subscribers: [], version: 0 },
  {year: 2016, semester: '02',  id: 'Pewew1', active: true, subscribers: [], version: 0 },
  {year: 2015, semester: '01',  id: 'Pewqea2', active: true, subscribers: [], version: 0 },
  {year: 2014, semester: '02',  id: 'Pewea2', active: true, subscribers: [], version: 0 },
  {year: 2013, semester: '01',  id: 'Pwewe1', active: true, subscribers: [], version: 0 },
];

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  dataSource: EdicaoDisciplinaModel[];

  constructor(protected evaluationService: EvaluationsService) { }

  ngOnInit() {
    this.evaluationService.getAllEditions().subscribe(
      (result: EdicaoDisciplinaModel[]) => this.dataSource = result
    )


    /* this.evaluationService.getApi().subscribe(
      (value) => console.log(value),
    ) */
  }

}
