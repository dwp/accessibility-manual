module.exports = {
  // Load JSON data and expose it to Nunjucks
  navigationDataLoader: function (req, res, next) {
    const { navItems } = require('../views/_globals/navigation-data')
    res.locals.navItems = navItems
    next()
  }
}
