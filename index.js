const { CoelhoJs } = require("coelhojs-core");

const myApp = new (class extends CoelhoJs {
  async bootstrap() {
    /*
     *
     * Here you can fill your database with data in order to test your app
     * Feel free to use any faker library to help you do so
     *
     * const { fakerFR: faker } = require("@faker-js/faker");
     */
  }

  initMiddlewares() {
    super.initMiddlewares();
    /*
     *
     * Feel free to add any middleware you want to use here. It will be added to the list of middleware already packed with CoelhoJs
     *
     */
  }

  serverStarted() {}
})();

myApp.start();
