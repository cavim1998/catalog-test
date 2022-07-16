import underscore from 'underscore'

export default ({ app }, inject) => {
  inject('_', underscore)
  app._ = underscore
}
