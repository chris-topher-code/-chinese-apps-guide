# Guide des Apps Chinoises

Un site statique redesigné pour aider les étrangers à comprendre les applications essentielles de la vie quotidienne en Chine.

Projet original de référence :

https://github.com/chris-topher-code/-chinese-apps-guide

## Fonctionnalités de cette version

Cette version conserve l'idée initiale d'un annuaire d'applications chinoises, mais la transforme en guide pratique pour la première semaine en Chine : voyageurs, étudiants, visiteurs d'affaires et nouveaux résidents.

Elle inclut :

- Interface mobile-first inspirée d'un guide de voyage.
- Texture papier, accents de tampon rouge et typographie éditoriale.
- Bascule anglais/français.
- Packs de départ pour l'arrivée, les paiements, le transport, la livraison et le shopping.
- Recherche par nom d'app, nom chinois, besoin, catégorie ou conseil de configuration.
- Filtres par catégories.
- Couverture complète des apps du projet original, avec Dianping en plus.
- Cartes pratiques avec vraies icônes distantes, badges de configuration et initiales de secours.
- Dialogues de détail avec étapes de configuration, avertissements, équivalents occidentaux et cas d'usage.
- Choix de plateforme pour ouvrir une recherche App Store iOS, CoolAPK ou web.
- Animations discrètes de page, cartes et packs de départ avec support de `prefers-reduced-motion`.
- Aucun build et aucune dépendance.

## Fichiers

```text
index.html
styles.css
app.js
README.md
README.fr.md
README.zh.md
```

## Lancer le site

Ouvrez directement `index.html` dans un navigateur.

Avec un serveur local :

```bash
python3 -m http.server 8080
```

Puis ouvrez :

```text
http://localhost:8080
```

## Direction design

L'interface doit ressembler à un guide pratique de terrain pour la Chine, pas à un annuaire générique.

Principes :

- Prioriser l'utilité de la première semaine plutôt que la popularité brute.
- Afficher rapidement la difficulté de configuration et les blocages possibles pour les étrangers.
- Organiser les apps par besoins réels : payer, se déplacer, commander à manger, faire du shopping.
- Garder l'esprit bilingue du projet original avec une identité visuelle plus forte.

## Liens de téléchargement

L'action « Obtenir l'app » demande à l'utilisateur de choisir une plateforme :

- Page App Store iOS directe quand une correspondance publique est disponible.
- Recherche CoolAPK Android.
- Recherche web de secours.

Les actions Android et web ouvrent volontairement des recherches plutôt que de supposer que chaque fiche directe restera permanente. La disponibilité, les régions et les règles de téléchargement peuvent changer.

## Icônes des apps

Les cartes pointent vers des images publiques de l'App Store quand elles sont disponibles. Si une icône distante ne se charge pas, l'interface revient à l'icône locale avec initiale pour garder une mise en page stable.

## Compatibilité avec le projet original

La liste conserve toutes les apps du projet original au lieu de réduire le périmètre. Elle ajoute aussi Dianping, traite WeChat comme app sociale et de paiement, et nomme 携程 Ctrip pour le contexte de l'app chinoise.
