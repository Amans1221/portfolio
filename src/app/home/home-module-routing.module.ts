import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, title: 'main' },
  { path: 'home', component: MainComponent, title: 'main' },
  { path: '**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
