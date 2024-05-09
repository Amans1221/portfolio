import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commonicon',
  templateUrl: './commonicon.component.html',
  styleUrl: './commonicon.component.scss'
})
export class CommoniconComponent {
@Input() icon: string="";
@Input() color: string="";
@Input() height: string="";
@Input() width: string="";


}
