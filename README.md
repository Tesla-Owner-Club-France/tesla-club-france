# Tesla Owners Club France

Site web officiel du Tesla Owners Club France avec carte interactive des partenaires.

## 🚀 Stack technique

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS 4
- **Carte** : Leaflet + React-Leaflet
- **Déploiement** : Vercel

## 📋 Fonctionnalités

- ✅ Page d'accueil avec proposition de valeur
- ✅ Carte interactive des partenaires (France)
- ✅ Filtrage par catégorie de services
- ✅ Fiche détaillée des partenaires
- ✅ Section actualités
- ✅ Page "Pourquoi adhérer"
- ✅ Page contact
- ✅ Design responsive (mobile-first)

## 🛠️ Développement

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Vérification des types
npm run typecheck
```

## 📁 Structure du projet

```
src/
├── app/                    # Pages (App Router)
├── components/
│   ├── ui/                 # Composants génériques
│   ├── layout/             # Header, Footer
│   ├── map/                # Carte Leaflet
│   └── partners/           # Composants partenaires
├── lib/
│   ├── data/               # Données (mock + futurs adapters)
│   └── utils.ts            # Utilitaires
├── types/                  # Types TypeScript
└── styles/                 # CSS global
```

## 🔧 Configuration

Les données des partenaires sont actuellement mockées dans `src/lib/data/partners-mock.ts`.

Pour la production, elles seront connectées à Google Sheets puis Zoho API.

## 📄 License

© 2026 Tesla Owners Club France. Tous droits réservés.
