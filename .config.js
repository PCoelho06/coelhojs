/*
 *
 * You can find here all the personal configs that you need to run the app.
 * This file is part of the .gitignore so don't worry, it won't be shared on your git repository.
 * You should keep all your personal config data here like database infos, API keys, etc.
 *
 */

let port = 3000;

module.exports = {
  app: {
    mode: "development",
    port,
    websocketport: 0, // 0 to disable
    severhost: "http://localhost:" + port,
    // backofficehost: "http://localhost:3002",
  },
  db: {
    sequelize: {
      database: "database-name",
      username: "username",
      password: "password",
      options: {
        host: "localhost",
        dialect: "mysql",
        logging: false, // you can remove this line if you need logs from the database
      },
    },
  },
};
