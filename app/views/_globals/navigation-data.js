const accessibilityLaw = require('./accessibility-law/_nav-item')
const jobRoles = require('./guidance-for-your-job-role/_nav-item')
const bestPractice = require('./best-practice/_nav-items')
const toolsAndResources = require('./tools-and-resources/_nav-items')

module.exports = {
  navItems: [
    accessibilityLaw,
    jobRoles,
    bestPractice,
    toolsAndResources,
    {
      title: 'Community',
      id: 'community',
      link: '/community',
      subsections: [
        {
          sectionHeading: '',
          subsections: [
            {
              title: 'Accessibility Principles',
              id: 'accessibility-principles',
              link: '/community/accessibility-principles',
              sectionId: 'accessibility-principles',
              subsections: []
            }
          ]
        }
      ]
    }
  ]
}
