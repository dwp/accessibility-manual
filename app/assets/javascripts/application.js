import MobileNav from '../../views/components/mobile-navigation/mobile-navigation'
import BackToTop from '../../views/components/back-to-top/back-to-top'
import { initAll } from 'govuk-frontend'

// Initialise mobile navigation
new MobileNav().init()

// Initialise back to top
if (document.querySelector('[data-module="app-back-to-top"]')) {
  const $backToTop = document.querySelector('[data-module="app-back-to-top"]')
  new BackToTop($backToTop).init()
}

initAll()
