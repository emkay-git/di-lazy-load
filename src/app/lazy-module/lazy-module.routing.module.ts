import { NgModule } from "@angular/core";
import { LazyComponentComponent } from '../lazy-module/lazy-component/lazy-component.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: '',
        component: LazyComponentComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class LazyRoutingModule { }
