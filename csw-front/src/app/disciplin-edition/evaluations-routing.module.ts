import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestsComponent } from "./tests/tests.component";
import { TestComponent } from "./test/test.component";
import { FormTestsComponent } from "./form-tests/form-tests.component";

const routes: Routes = [
    {
        path: '',
        component: TestsComponent,
    },
    {
        path: 'subscribers',
        component: TestComponent,
    },
    {
        path: 'form-test',
        component: FormTestsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvaluationsRoutingModule{}
