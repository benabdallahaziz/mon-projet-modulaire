import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  standalone: true,
  imports: [CommonModule, FormsModule], // ← TRÈS IMPORTANT
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  searchTerm: string = '';

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      likes: 12,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      likes: 0,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      likes: 0,
      isFavorite: false
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      likes: 8,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      likes: 25,
      isFavorite: false
    }
  ];

  favoriteSuggestions: Suggestion[] = [];

  get filteredSuggestions(): Suggestion[] {
    if (!this.searchTerm) {
      return this.suggestions;
    }

    const term = this.searchTerm.toLowerCase();
    return this.suggestions.filter(suggestion =>
      suggestion.title.toLowerCase().includes(term) ||
      suggestion.category.toLowerCase().includes(term)
    );
  }

  likeSuggestion(suggestion: Suggestion): void {
    suggestion.likes = (suggestion.likes || 0) + 1;
  }

  addToFavorites(suggestion: Suggestion): void {
    if (!this.favoriteSuggestions.find(fav => fav.id === suggestion.id)) {
      suggestion.isFavorite = true;
      this.favoriteSuggestions.push({...suggestion});
    }
  }

  showButtons(suggestion: Suggestion): boolean {
    return suggestion.status !== 'refusee';
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'acceptee': 'ACCEPTÉE',
      'refusee': 'REFUSÉE',
      'en_attente': 'EN ATTENTE'
    };
    return statusMap[status] || status;
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }
}
