# Control Tower

### Présentation du Projet
Ce projet propose une interface utilisateur web interactive utilisant React,
TypeScript, Zod, et Tailwind, enrichie par json-server pour une API simulée et
react-loading-skeleton pour des chargements esthétiques.

### Technologies et Justifications

- **Docker avec Alpine** : Alpine est une distribution Linux légère,
idéale pour créer des images Docker efficaces et performantes.

- **Vite avec SWC** : Emploie SWC, un compilateur écrit en Rust,
pour une compilation efficace du TypeScript.

- **json-server** : Un outil simple pour créer une API REST fake,
permettant de simuler des interactions back-end sans avoir besoin d'un serveur réel.

- **react-loading-skeleton** : Une bibliothèque pour créer des animations de chargement,
améliorant l'expérience utilisateur pendant l'attente du chargement des données.

### Utilisation

```bash
docker compose up
```
