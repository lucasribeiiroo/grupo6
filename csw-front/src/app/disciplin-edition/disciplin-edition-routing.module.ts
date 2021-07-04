import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EdicaoDisciplinaComponent } from "./tests/edicao-disciplina.component";
import { TestComponent } from "./test/test.component";
import { FormTestsComponent } from "./form-tests/form-tests.component";

const routes: Routes = [
    {
        path: '',
        component: EdicaoDisciplinaComponent,
    },
    {
        path: 'edit',
        component: FormTestsComponent,
    },
    {
        path: 'subscribers',
        component: TestComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DisciplinEditionRoutingModule{}
