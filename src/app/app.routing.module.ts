import { NgModule } from "@angular/core";
import { LazyComponentComponent } from "./lazy-module/lazy-component/lazy-component.component";
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'lazy-load',
        loadChildren: './lazy-module/lazy-module.module#LazyModuleModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
