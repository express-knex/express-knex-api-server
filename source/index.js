export default (app) => {
  /*
  1. init storage
  2.
   */

  return Promise.resolve()
    .then(() => {
      // define CORS if it is enabled
      if (app.services.cors) {
        app.use(app.services.cors({
          origin: '*',
          allowedHeaders: 'Content-Type,Authorization,Content-Range,Accept,Accept-Encoding,Accept-Language',
          exposedHeaders: 'Content-Type,Authorization,Content-Range,Accept,Accept-Encoding,Accept-Language'
        }))
      }
    })
}