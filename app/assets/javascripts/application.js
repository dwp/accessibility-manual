import './vendor/jQuery'
import MobileNav from '../../components/mobile-navigation/mobile-navigation'
import BackToTop from '../../components/back-to-top/back-to-top'

// Initialise mobile navigation
new MobileNav().init()

// Initialise back to top
if (document.querySelector('[data-module="app-back-to-top"]')) {
  var $backToTop = document.querySelector('[data-module="app-back-to-top"]')
  new BackToTop($backToTop).init()
}
