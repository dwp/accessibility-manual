const fs = require('fs')
const nunjucks = require('nunjucks')
const matter = require('gray-matter')
const beautify = require('js-beautify').html

// This helper function takes a path of a file and
// returns the contents as string
exports.getFileContents = path => {
  let fileContents
  try {
    fileContents = fs.readFileSync(path)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(err.message)
    } else {
      throw err
    }
  }
  return fileContents.toString()
}

// This helper function takes a path of a *.md.njk file and
// returns the Nunjucks syntax inside that file without markdown data and imports
exports.getNunjucksCode = path => {
  const fileContents = this.getFileContents(path)
  const parsedFile = matter(fileContents)
  return parsedFile.content
}

// This helper function takes a path of a *.md.njk file and
// returns the front matter as an object
exports.getFrontmatter = path => {
  const fileContents = this.getFileContents(path)
  const parsedFile = matter(fileContents)
  return parsedFile.data
}

// This helper function takes a path of a *.md.njk file and
// returns the HTML rendered by Nunjucks without markdown data
exports.getHtmlCode = path => {
  const fileContents = this.getFileContents(path)
  const parsedFile = matter(fileContents)
  const content = parsedFile.content
  let html
  try {
    html = nunjucks.renderString(content)
  } catch (err) {
    if (err) {
      console.log('Could not get HTML code from ' + path)
    }
  }

  return beautify(html.trim(), {
    indent_size: 2,
    end_with_newline: true,
    // If there are multiple blank lines, reduce down to one blank new line.
    max_preserve_newlines: 1
  })
}
