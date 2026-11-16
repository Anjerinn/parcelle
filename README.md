# Parcelle

Carnet de dépistage pour la serre et le jardin, avec guide hors ligne. Application web statique (GitHub Pages), installable sur l'écran d'accueil de l'iPhone.

- Toutes les données (tournées, observations, photos personnelles) restent sur l'appareil, dans IndexedDB. Ce dépôt ne contient que le code, le guide et des photos de référence sous licence ouverte.
- Synchronisation entre appareils : Réglages → Exporter le journal, puis Importer un journal sur l'autre appareil.
- Guide : `data/guide.json`. Chaque fiche cite ses sources (gouvernementales et universitaires). `fiches/` contient les mêmes fiches en pages HTML autonomes.
- Photos de référence : `photos/`, crédits et licences dans `photos/credits.json` (CC0 ou CC BY, observations iNaturalist).
- Aucune recommandation de traitement. Application construite avec Claude (Anthropic).

## Publier une nouvelle version

1. Modifier les fichiers.
2. Changer `CACHE` dans `sw.js` et `VERSION` dans `index.html`.
3. Téléverser sur la branche `main`.

## Versions

- 3.1.0 (16 nov. 2026) : guide réécrit à partir de sources citées, photos de référence, notes par fiche, sauvegarde en fin de tournée.
- 3.0.0 (15 nov. 2026) : première version GitHub Pages.
