import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root', // this seems to be selecting the "root" HTML element in the index.html
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main>
      <header>
        <img class="brand-name" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>

      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}
