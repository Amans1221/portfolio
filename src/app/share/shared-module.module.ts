import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoniconComponent } from './components/commonicon/commonicon.component';



@NgModule({
  declarations: [
    CommoniconComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommoniconComponent
  ]
})
export class SharedModuleModule { }
