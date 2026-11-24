# TP 1 : Angular - Formulaires

Projet réalisé avec Angular et Angular Material pour les deux exercices du TP1 :
- Exercice 1 : formulaire d'inscription en approche Template-Driven (`src/app/components/template-driven-form`)
- Exercice 2 : même formulaire en approche Reactive Forms (`src/app/components/reactive-form`)

## Lancement

```bash
npm install
ng serve
```

Application disponible sur `http://localhost:4200`.

## Réponse à la question de réflexion

Les deux approches permettent d'arriver au même résultat mais ne fonctionnent pas de la même façon.

Avec les Template-Driven Forms, presque tout se passe dans le HTML grâce aux directives (`ngModel`, `required`, `minlength`, `min`, `email`). C'est rapide à mettre en place et on écrit peu de TypeScript, mais le template devient vite chargé dès qu'il y a plusieurs champs ou des règles un peu plus complexes.

Avec les Reactive Forms, la structure du formulaire et les validateurs sont définis directement dans le fichier TypeScript via `FormGroup` et `FormBuilder`. Le HTML reste plus propre et on garde un meilleur contrôle sur l'état des champs, les validations personnalisées et les tests.

En pratique, j'utiliserais Template-Driven pour des petits formulaires simples (comme une page de login ou un formulaire de contact), et Reactive Forms dès que le formulaire devient plus grand, dynamique ou demande des validations avancées.
