const { navItems } = require('../../app/views/_globals/navigation-data')

function getNavURLs (testURL) {
  // Creates an set ready for Nav objects
  // Pushes the home page into the Nav as it's not in the navigation menu
  const urls = [
    {
      title: 'Home page',
      url: testURL
    }
  ]

  // For each of the nav items in the navigation menu
  navItems.forEach(function (navObject) {
    // Pushes the URL and the title into the array ready for testing
    urls.push({
      title: navObject.title,
      url: `${testURL}${navObject.link}`
    })

    // For each of the subNav items in each item
    navObject.subsections.forEach(function (section) {
      section.subsections.forEach(function (subObject) {
        // Push the subNav items into the array ready for testing
        urls.push({
          title: subObject.title,
          url: `${testURL}${subObject.link}`
        })
      })
    })
  })
  // Returns an array of URL objects to be tested
  return urls
}

// Creates an async version of forEach
async function asyncForEach (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    await cb(arr[i], i, arr)
  }
}

module.exports = {
  getNavURLs,
  asyncForEach
}
