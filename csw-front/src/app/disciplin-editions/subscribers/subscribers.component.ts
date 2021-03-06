import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EdicaoDisciplinaModel } from 'src/app/disciplin-editions/models/edicaoDisciplina.model';

@Component({
  selector: 'app-subscribers-table',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})

export class SubscribersComponent implements OnInit {
  @Input() dataSource: EdicaoDisciplinaModel[];
  id: string;
  year: number;
  semester: string;
  subscribers: any[];
  active: boolean;
  displayedColumns: string[] =  ['id', 'year', 'semester','active', 'subscribes','Buttons'];

  constructor(protected router: Router) {};

  ngOnInit() {
    this.id = this.dataSource[1].id;
    this.year = this.dataSource[1].year;
    this.semester = this.dataSource[1].semester;
    this.subscribers = this.dataSource[1].subscribers;
    this.active = this.dataSource[1].active;
  }

  onClickCreate() {
    this.router.navigateByUrl("/create");
  }

  onClickSubscribes(item){
    this.router.navigateByUrl(`/subscribers/${item}`, { state: { dataSource: this.dataSource, item: item } });
  }

  onClickEdit(item){
    const itemSelected = this.dataSource.find(i => i.id === item);
    this.router.navigateByUrl(`/edit/${item}`, { state: { dataSource: this.dataSource, item: itemSelected } });
  }

  onClickDelete(){ }
}
