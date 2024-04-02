module.exports = {
  /*
   *
   * There are multiple ways to define new routes with CoelhoJs. All of them are made for particular situations but they are all made one following the same shape :
   * - the first part defines the method followed by the path to the route
   * - the second part defines the action for the specified route
   *
   * For static routes, you can simply do as follow :
   * "GET /": { view: "website/index.eta", viewData: { menu: "index" } }
   * As you can see, you can pass data to the view in the viewData object
   *
   * For routes where you need to fetch data from the database, you need to specify the controller to call as follows :
   * "GET /our-products": { action: "websiteController.showProducts" }
   *
   * If you need to define classical REST API routes, then you can do as follows :
   * "API /v1/products": {
   *   action: "productsController",
   *   middlewares: ["middleware1", "middleware2", "middleware3"],
   * }
   * This automatically creates 5 routes :
   *  - GET /v1/products
   *  - POST /v1/products
   *  - GET /v1/products/:id
   *  - PUT /v1/products/:id
   *  - DELETE /v1/products/:id
   * Moreover, you can call zero, one or more middlewares before returning the response
   *
   * Last but not least, you can define a redirection as follows :
   * "GET /my-redirect": { redirect: "/" }
   *
   */
  "GET /": { view: "example/homepage.eta", viewData: { title: "CoelhoJS" } },
};
