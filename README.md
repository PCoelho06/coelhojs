### CoelhoJS

CoelhoJS est un framework Node.js conçu pour permettre le développement rapide du back-end d'applications web et d'API.

#### Installation

Pour créer une nouvelle application CoelhoJS, vous pouvez utiliser npx avec la commande suivante :

```bash
npx new-coelhojs-app nom-du-dossier
```

#### Utilisation

Pour créer simplement une API renvoyant les articles d'un blog, vous pouvez utiliser les exemples de modèles et de contrôleurs suivants :

**models/category.model.js**

```javascript
const { sequelize, DataTypes } = require("coelhojs");

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
const { sequelize, DataTypes } = require("coelhojs");

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

**controllers/article.controller.js**

```javascript
const { AbstractController, models } = require("coelhojs");

const { Article } = models;

class ArticleController extends AbstractController {
  constructor() {
    super(Article, ["type"]);
  }
}

module.exports = { ArticleController };
```

**routes/api.route.js**

```javascript
"/v1/articles": {
    action: "articleController",
    middlewares: [],
  },
```

#### Contributions

- GitHub : [https://github.com/PCoelho06/coelhojs](https://github.com/PCoelho06/coelhojs)
- Mail : p.coelho@lapinou.tech

Pour toute contribution au projet CoelhoJS, n'hésitez pas à soumettre vos suggestions sur GitHub ou à contacter l'équipe de développement par e-mail.

#### Licence

CoelhoJS est distribué sous la licence MIT.