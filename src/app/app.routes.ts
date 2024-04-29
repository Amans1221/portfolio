import { Routes } from '@angular/router';


export const routes: Routes = [

    { path: '', loadChildren: () => import('./home/home-module.module').then(m => m.HomeModuleModule), title: 'home' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home'}

];
