const slugify = require('slugify')

function code (renderer) {
  renderer.code = function (code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0]
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang)
      if (out != null && out !== code) {
        escaped = true
        code = out
      }
    }
    code = code.replace(/~~/g, '')
    if (!lang) return `<pre><code role="figure" tabindex="0" class="hljs">${code}</code></pre>\n`
    return `<pre><code role="figure" tabindex="0" class="hljs ${this.options.langPrefix}${escape(lang, true)}">${code}</code></pre>\n`
  }
}
function heading (renderer) {
  renderer.heading = function (text, level) {
    const braces = (text || '').match(/\{(.*?)\}/)
    const pageHeading = text.replace(/\{(.*?)\}/, '').trim()
    const id = slugify(pageHeading, { lower: true, strict: true })

    if (braces) {
      const sectionHeading = braces[0].replace(/\{|\}/g, '')

      return `
        <h${level} id="${id}" class="heading" tabindex="-1">
          <span class="caption">
            ${sectionHeading}
          </span>
          ${pageHeading}
        </h${level}>
      `
    }
    return `
      <h${level} id="${id}" class="heading" tabindex="-1">
        ${text}
      </h${level}>
    `
  }
}
function paragraph (renderer) {
  renderer.paragraph = function (text) {
    const isHTML = text.match(/^\$\s/)
    if (isHTML) {
      let _class = ''
      let id = ''
      let tag = ''
      let closingTag = ''
      const parts = text.replace('$ ', '').split(' ')
      parts.forEach(part => {
        if (part.charAt(0) === '/') {
          closingTag = part
        } else if (part.charAt(0) === '#') {
          id = ` id="${part.replace('#', '')}"`
        } else if (part.charAt(0) === '.') {
          _class = ` class="${part.replace('.', '')}"`
        } else {
          tag = part
        }
      })
      if (closingTag) {
        return `<${closingTag}>`
      }
      return `<${tag}${id}${_class}>`
    }
    const isDL = text.match(/(.*)<br>:\s(.*)/g)
    if (isDL) {
      const array = text.split('<br>')
      const rows = []
      array.forEach(item => {
        const isKey = item.charAt(0) !== ':'
        const isValue = item.charAt(0) === ':'
        if (isKey) {
          rows.push({ dt: item, dd: [] })
        }
        if (isValue) {
          const lastIndex = rows.length - 1
          rows[lastIndex].dd.push(item)
        }
      })
      let dl = '<dl class="govuk-summary-list">'
      rows.forEach(row => {
        dl += '<div class="govuk-summary-list__row">'
        dl += `<dt class="govuk-summary-list__key">${row.dt}</dt>`
        dl += '<dd class="govuk-summary-list__value">'
        row.dd.forEach(subItem => {
          const text = subItem.slice(2)
          dl += `<p>${text}</p>`
        })
        dl += '</dd>'
        dl += '</div>'
      })
      dl += '</dl>'
      return dl
    }
    return `<p>${text}</p>`
  }
}
function link (renderer) {
  let html
  const linkRenderer = renderer.link
  renderer.link = (href, title, text) => {
    if (text.match(/{(.*)}/)) {
      text = text.replace('{', '<span class="govuk-visually-hidden">')
      text = text.replace('}', '</span>')
      html = linkRenderer.call(renderer, href, title, text)
    } else {
      html = linkRenderer.call(renderer, href, title, text)
    }
    return html
  }
}

module.exports = { code, heading, paragraph, link }
