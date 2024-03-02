/*
 *
 * Additional configuration for CoelhoJs Framework
 * this file is shared so don't expose private data here
 *
 */

module.exports = {
  app: {
    name: "CoelhoJs",
    version: "1.0.0",
    jsonLimit: "10mb",
  },
  middlewares: {
    cors: {
      origin: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      allowedHeaders:
        "Content-Type,Authorization,Credentials,x-auth-accesstoken",
      // preflightContinue: false,
      optionsSuccessStatus: 200,
    },
    // helmet: {
    //   contentSecurityPolicy: false,
    //   crossOriginEmbedderPolicy: false,
    //   crossOriginOpenerPolicy: false,
    //   crossOriginResourcePolicy: false,
    //   originAgentCluster: false,
    //   referrerPolicy: false,
    //   strictTransportSecurity: false,
    //   xContentTypeOptions: false,
    //   xDnsPrefetchControl: false,
    //   xDownloadOptions: false,
    //   xFrameOptions: false,
    //   xPermittedCrossDomainPolicies: false,
    //   xPoweredBy: false,
    //   xXssProtection: false,
    // },
    // see https://www.npmjs.com/package/express-robots-txt
    robots: {
      UserAgent: "*",
      Disallow: "/",
    },
    // see https://www.npmjs.com/package/compression
    compression: {
      filter: function (req, res) {
        return true;
      },
    },
    // see https://www.npmjs.com/package/cookie-parser
    cookieParser: {
      secret: null,
      options: {},
    },
    // set public folder
    static: "/public",
  },
};
