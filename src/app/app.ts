import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-list-suggestion></app-list-suggestion>
    </main>
    <app-footer></app-footer>
  `,
  // Supprimer styleUrls ou créer le fichier CSS
})
export class App {
  title = 'mon-projet-suggestions';
}
