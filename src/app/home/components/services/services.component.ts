import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  public cardData = [
    { title: 'Web Design', text: this.generateLoremIpsum(),icon:'rectangle-group'},
    { title: 'Web Application', text: this.generateLoremIpsum(),icon:'banknotes'},
    { title: 'BackEnd Development', text: this.generateLoremIpsum(),icon:'server-stack'},
    { title: 'SQL DataBase', text: this.generateLoremIpsum(),icon:'circle-stack'},
    { title: 'JavaScript', text: this.generateLoremIpsum(),icon:'language'},
    { title: 'Angular', text: this.generateLoremIpsum(),icon:'at-symbol'},
    { title: 'HTML/CSS', text: this.generateLoremIpsum(),icon:'code-bracket'},
    { title: 'Azure Function', text: this.generateLoremIpsum(),icon:'shield-check'},



    // Add more objects for each card
  ];
  generateLoremIpsum(): string {
    // You can implement a function to generate Lorem Ipsum text here
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  }
}
