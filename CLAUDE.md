# Prompt pour Claude Code : Site web Cabinet ABAQ

## Informations de l'entreprise
- **Nom** : Cabinet ABAQ
- **Logo** : Fourni - "CA" stylisé en jaune avec typographie manuscrite
- **Secteur** : Maîtrise d'œuvre et BET Thermique  
- **Charte graphique** : Basée sur le logo (jaune #F9C934, gris, blanc)
- **Hébergement** : NAS personnel avec nom de domaine LWS

## Spécifications techniques
- **Framework** : Next.js 14+ avec App Router
- **Styling** : Tailwind CSS (palette jaune/noir/blanc personnalisée)
- **CMS** : Système de gestion de contenu simple intégré pour actualités et réalisations
- **Données** : JSON/Markdown pour faciliter les mises à jour
- **Images** : Optimisation Next.js avec support upload local
- **Documentation** : Utilise Context7 pour les frameworks modernes

## Structure du site

### 1. Page d'accueil (/
- **Hero section** : "Cabinet ABAQ - Expertise en Maîtrise d'œuvre et Études Thermiques"
- **Services principaux** : Maîtrise d'œuvre, BET Thermique, Audits énergétiques, etc.
- **Certifications en avant** : Section dédiée OPQIBI, Amiante, RGE (avec logos/badges)
- **Dernières réalisations** (3-4 projets récents)
- **Actualités récentes** (3 derniers articles)
- **Call-to-action** contact/devis

### 2. Navigation et design
- **Logo fourni** : Logo Cabinet ABAQ avec "CA" stylisé jaune et typographie manuscrite
- **Palette personnalisée** basée sur le logo :
  - Jaune principal : #F9C934 (jaune du logo)
  - Noir/Gris foncé : #4A4A4A / #333333
  - Blanc : #FFFFFF
  - Gris clair : #F5F5F5 pour les backgrounds
- **Typography** : 
  - Headings : Police moderne sans-serif
  - Accents : Style manuscrit pour rappeler le logo
- **Design cohérent** avec l'identité du logo
- **Mobile-first** responsive

### 3. Pages principales
- `/` - Accueil
- `/services` - Détail maîtrise d'œuvre et BET
- `/certifications` - Page dédiée OPQIBI, amiante, etc.
- `/realisations` - Portfolio avec système de gestion
- `/actualites` - Blog avec système de gestion  
- `/a-propos` - Présentation cabinet
- `/contact` - Formulaire et coordonnées

## Fonctionnalités de gestion de contenu

### 1. Système Actualités (/actualites)
- **Interface d'administration** simple (route protégée /admin/actualites)
- **Ajout d'articles** avec :
  - Titre, contenu (Markdown), date
  - Upload d'images (stockage local optimisé)
  - Catégories (Réglementaire, Projets, Entreprise)
  - Statut (brouillon/publié)
- **Gestion** : Édition, suppression, réorganisation
- **Fichiers JSON/Markdown** pour persistance locale

### 2. Système Portfolio (/realisations)
- **Interface d'administration** (/admin/realisations)
- **Ajout de projets** avec :
  - Nom projet, description, localisation
  - Photos avant/après, plans
  - Type de mission (Maîtrise d'œuvre, BET, Audit)
  - Date de réalisation, superficie
  - Mots-clés/tags
- **Galerie photos** avec lightbox
- **Filtres** par type de mission, année, localisation

### 3. Gestion des certifications
- **Section dédiée** avec logos haute qualité
- **Descriptions** de chaque certification
- **Dates de validité** et numéros d'agrément
- **Mise à jour facile** via fichier de configuration

## Interface d'administration

### Dashboard admin (/admin)
- **Authentification simple** (login/password)
- **Vue d'ensemble** : stats articles, projets
- **Raccourcis** vers gestion actualités/réalisations
- **Upload d'images** avec prévisualisation
- **Sauvegarde** automatique en JSON/Markdown

### Système de fichiers
```
/data
  /actualites
    - articles.json (métadonnées)
    - /content (fichiers .md)
    - /images (photos articles)
  /realisations  
    - projets.json (métadonnées)
    - /images (photos projets)
  /certifications
    - certifications.json
    - /logos
```

## Contenu spécifique Cabinet ABAQ

### Services à mettre en avant
1. **Maîtrise d'œuvre** : Conduite de projets de construction/rénovation
2. **BET Thermique** : Études RT2012, RE2020, DPE
3. **Audits énergétiques** : Bâtiments résidentiels et tertiaires
4. **Accompagnement réglementaire** : Conformité, certifications
5. **Suivi de chantier** : Coordination, contrôles qualité

### Certifications à valoriser
- **OPQIBI** (Bureau d'études)
- **Certification Amiante** (repérage, diagnostic)
- **RGE** (Reconnu Garant Environnement)
- **Autres certifications spécifiques**

### Sections homepage
1. **Hero** avec CTA "Demander un devis"
2. **Services** (6 cards avec icônes)
3. **Certifications** (badges avec descriptions)
4. **Chiffres clés** (années d'expérience, projets réalisés)
5. **Dernières réalisations** (carrousel)
6. **Actualités** (3 derniers articles)
7. **Zone d'intervention** (carte ou liste villes)

## Instructions techniques pour Claude Code

### 1. Configuration initiale
- Initialise Next.js 14 avec App Router
- Intègre le logo Cabinet ABAQ fourni (optimisation SVG/PNG)
- Configure Tailwind avec palette basée sur le logo (#F9C934, gris, blanc)
- Structure dossiers : app/, components/, lib/, data/, public/
- Met en place l'authentification admin simple

### 2. Développement prioritaire
1. **Layout général** (Header, Footer, Navigation)
2. **Page d'accueil** complète avec toutes les sections
3. **Système de gestion actualités** (CRUD complet)
4. **Système de gestion réalisations** (CRUD complet)  
5. **Pages statiques** (services, certifications, contact)
6. **Interface admin** avec tableau de bord

### 3. Fonctionnalités avancées
- **Upload d'images** avec compression automatique
- **Générateur de sitemap** pour SEO
- **Formulaire de contact** avec validation
- **Optimisations** performances et référencement
- **Export/Import** des données pour sauvegarde

### 4. Déploiement NAS/LWS
- **Build statique** compatible hébergement simple
- **Configuration** pour serveur Apache/Nginx
- **Instructions déploiement** sur NAS
- **Scripts** de mise à jour du contenu

## Utilisation Context7
Utilise Context7 pour les documentations récentes de :
- Next.js (App Router, optimisations images)
- Tailwind CSS (configuration couleurs, composants)  
- Système de fichiers Node.js (gestion JSON/Markdown)

## Livrables attendus
1. **Site complet** Cabinet ABAQ aux couleurs de la charte
2. **Interface admin** pour gestion autonome du contenu
3. **Documentation** utilisation et déploiement NAS
4. **Scripts** sauvegarde et mise à jour
5. **Code source** propre et commenté

---
**Priorité** : Interface de gestion simple pour permettre la mise à jour autonome des actualités et réalisations sans compétences techniques.