import Wrap from './utils/wrap'
import Mail from 'express-knex-mailer'

export default (app) => {
  return Promise.resolve()
    .then(() => {
      // configure wrap service:
      app.wrap = Wrap(app)
      app.mail = Mail(app)

      return app
    })
}
