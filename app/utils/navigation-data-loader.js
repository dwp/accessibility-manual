module.exports = {
  // Load JSON data and expose it to Nunjucks
  navigationDataLoader: function (req, res, next) {
    const { navItems } = require('../views/_globals/navigation-data.json')
    res.locals.navItems = navItems
    next()
  }
}
