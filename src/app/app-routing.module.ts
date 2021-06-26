import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEdicaoDisciplinaComponent } from './create-edicao-disciplina/create-edicao-disciplina.component';

const routes: Routes = [
  { path: 'first-component', component: CreateEdicaoDisciplinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
