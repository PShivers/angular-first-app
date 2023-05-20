import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // this seems to be selecting the "root" HTML element in the index.html
  standalone: true,
  imports: [],
  template: `<h1>Hello world!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}
