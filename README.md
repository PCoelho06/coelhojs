# CoelhoJS

CoelhoJS est un framework Node.js conçu pour permettre le développement rapide du back-end d'applications web et d'API.

## Installation

Il existe plusieurs manières de créer une nouvelle application CoelhoJS.

### Avec la CLI CoelhoJS

La CLI (Command-Line Interface) CoelhoJS vous permettra de créer de nouvelles applications mais aussi de vous faciliter la vie tout au long de la phase de programmation de votre projet. Pour plus d'informations sur la CLI CoelhoJS, rendez vous sur le dépôt github : [https://github.com/PCoelho06/coelhojs-cli.git](https://github.com/PCoelho06/coelhojs-cli.git).

Pour installer la CLI :

```bash
npm i -g coelhojs-cli
```

Il vous suffira suite de taper la commande suivante :

```bash
coelhojs new-app nom-du-projet
```

En remplaçant _nom-du-projet_ par le nom du projet que vous souhaitez créer.

### Sans la CLI

Pour créer une nouvelle application CoelhoJS, vous pouvez utiliser npx avec la commande suivante :

```bash
npx new-coelhojs-app nom-du-dossier
```

Vous pouvez ensuite mettre à jour le fichier _.config.js_ afin de vous connecter à votre base de données.

Lancez ensuite la commande

```bash
npm run start
```

afin de lancer l'application.

:partying_face: Félicitations, rendez-vous sur [http://localhost:3000](http://localhost:3000)

## Utilisation

Pour créer simplement une API renvoyant les articles d'un blog, vous pouvez utiliser les exemples de modèles et de contrôleurs suivants :

**models/category.model.js**

```javascript
const { sequelize, DataTypes } = require("coelhojs-core");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {}
);

module.exports = Category;
```

**models/article.model.js**

```javascript
const { sequelize, DataTypes } = require("coelhojs-core");

const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    indexes: [
      {
        fields: ["categoryId"],
      },
    ],
  }
);

module.exports = Article;
```

**models/associations.js**

```javascript
const { models } = require("coelhojs-core");
const { Article, Category } = models;

module.exports = {
  setAssociations: (_) => {
    Article.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
    Category.hasMany(Article, { foreignKey: "categoryId", as: "articles" });
  },
};
```

**controllers/article.controller.js**

```javascript
const { AbstractController, models } = require("coelhojs-core");

const { Article } = models;

class ArticleController extends AbstractController {
  constructor() {
    super(Article, ["category"]);
  }
}

module.exports = { ArticleController };
```

**routes/api.route.js**

```javascript
module.exports = {
  "API /v1/articles": {
    action: "articleController",
    middlewares: [],
  },
};
```

## Contributions

- GitHub : [https://github.com/PCoelho06/coelhojs](https://github.com/PCoelho06/coelhojs)
- Mail : p.coelho@lapinou.tech

Pour toute contribution au projet CoelhoJS, n'hésitez pas à soumettre vos suggestions sur GitHub ou à contacter l'équipe de développement par e-mail. Ces voies de communication restent valables pour faire remonter tout problème rencontré avec CoelhoJS.

## Licence

CoelhoJS est distribué sous la licence MIT.
