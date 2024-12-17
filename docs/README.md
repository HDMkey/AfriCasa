# AfriMarket - Documentation

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture](#architecture)
3. [Fonctionnalités](#fonctionnalités)
4. [Structure des dossiers](#structure-des-dossiers)
5. [Composants](#composants)
6. [Hooks personnalisés](#hooks-personnalisés)
7. [Types](#types)
8. [API](#api)
9. [Guide de démarrage](#guide-de-démarrage)

## Vue d'ensemble

AfriMarket est une marketplace africaine permettant aux utilisateurs d'acheter, vendre et louer des biens. Le projet est construit avec Next.js 13, TypeScript, Tailwind CSS et shadcn/ui.

## Architecture

Le projet suit une architecture moderne basée sur :
- Next.js 13 avec App Router
- TypeScript pour la sécurité des types
- Tailwind CSS pour le styling
- shadcn/ui pour les composants UI
- Hooks personnalisés pour la logique métier

## Fonctionnalités

### 1. Authentification
- Connexion utilisateur
- Inscription
- Gestion de session
- Protection des routes

### 2. Annonces
- Création d'annonces
- Recherche et filtrage
- Catégorisation (Vente/Location)
- Upload d'images
- Gestion des prix

### 3. Tableau de bord
- Vue d'ensemble des statistiques
- Gestion des annonces
- Messagerie
- Paramètres du compte

### 4. Pages principales
- Accueil
- Acheter
- Vendre
- Louer
- Contact
- Dashboard

## Structure des dossiers

```
├── app/                    # Pages et routes Next.js
│   ├── (auth)/            # Routes d'authentification
│   ├── dashboard/         # Routes du tableau de bord
│   └── ...
├── components/            # Composants React
│   ├── dashboard/        # Composants du tableau de bord
│   ├── listings/         # Composants des annonces
│   └── ui/              # Composants UI réutilisables
├── hooks/                # Hooks personnalisés
├── lib/                  # Utilitaires et types
│   ├── api/             # Fonctions d'API
│   └── types/           # Types TypeScript
└── docs/                # Documentation
```

## Composants

### Composants principaux

1. **Navbar (`components/navbar.tsx`)**
   - Navigation principale
   - Menu mobile responsive
   - Liens vers les sections principales

2. **ListingCard (`components/listings/listing-card.tsx`)**
   - Affichage d'une annonce
   - Image, titre, prix, localisation
   - Actions rapides

3. **DashboardSidebar (`components/dashboard/sidebar.tsx`)**
   - Navigation du tableau de bord
   - Liens vers les sections du dashboard

### Composants UI

Utilisation des composants shadcn/ui :
- Button
- Card
- Input
- Textarea
- Slider
- etc.

## Hooks personnalisés

1. **useAuth (`hooks/use-auth.ts`)**
   ```typescript
   const { isAuthenticated, user, login, logout, register } = useAuth();
   ```
   Gestion de l'authentification utilisateur

2. **useListings (`hooks/use-listings.ts`)**
   ```typescript
   const { listings, loading } = useListings();
   ```
   Récupération et gestion des annonces

3. **useMessages (`hooks/use-messages.ts`)**
   ```typescript
   const { messages, loading } = useMessages();
   ```
   Gestion des messages

## Types

### User (`lib/types/user.ts`)
```typescript
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Listing (`lib/types/listing.ts`)
```typescript
interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  type: 'sale' | 'rent';
  location: {
    address: string;
    city: string;
    country: string;
  };
  images: string[];
  userId: string;
  status: 'active' | 'pending' | 'sold' | 'rented';
}
```

## API

### Authentification (`lib/auth.ts`)
```typescript
authenticateUser(email: string, password: string): Promise<User>
registerUser(userData: Partial<User>): Promise<User>
logoutUser(): Promise<void>
```

### Annonces (`lib/api/listings.ts`)
```typescript
getListings(): Promise<Listing[]>
createListing(listing: Partial<Listing>): Promise<Listing>
updateListing(id: string, listing: Partial<Listing>): Promise<Listing>
deleteListing(id: string): Promise<void>
```

## Guide de démarrage

1. Installation des dépendances :
```bash
npm install
```

2. Lancement du serveur de développement :
```bash
npm run dev
```

3. Construction pour la production :
```bash
npm run build
```

4. Démarrage en production :
```bash
npm start
```

## Bonnes pratiques

1. **Code**
   - Utilisation de TypeScript
   - Composants fonctionnels React
   - Hooks personnalisés pour la logique
   - Séparation des responsabilités

2. **Style**
   - Utilisation de Tailwind CSS
   - Classes utilitaires
   - Composants UI réutilisables
   - Design responsive

3. **Performance**
   - Chargement à la demande
   - Optimisation des images
   - Mise en cache des données
   - Code splitting automatique

4. **Sécurité**
   - Validation des données
   - Protection CSRF
   - Authentification sécurisée
   - Sanitization des entrées