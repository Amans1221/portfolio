import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main.component';
import { CardHoverDirective } from '../card-hover.directive';
import { SharedModuleModule } from '../share/shared-module.module';
import { ContactComponent } from './components/contact/contact.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    SkillsComponent,
    ServicesComponent,
    MainComponent,
    ContactComponent,
    CardHoverDirective
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HomeModuleRoutingModule,
    FontAwesomeModule
  
  ]
})
export class HomeModuleModule { 

}
