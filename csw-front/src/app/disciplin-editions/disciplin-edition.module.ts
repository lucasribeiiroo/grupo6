import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EdicaoDisciplinaTableComponent } from './tests/components/edicao-disciplinas-table/edicao-disciplinas-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule} from '@angular/material/input';

import { EdicaoDisciplinaComponent } from './tests/edicao-disciplina.component';
import { DisciplinEditionService } from './services/disciplin-edition.service';
import { DisciplinEditionRoutingModule } from './disciplin-edition-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';

@NgModule({
  declarations: [
    EdicaoDisciplinaComponent,
    EdicaoDisciplinaTableComponent,
    EditFormComponent,
    CreateFormComponent
  ],
  imports: [
    DisciplinEditionRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    DisciplinEditionService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DisciplinEditionModule { }
