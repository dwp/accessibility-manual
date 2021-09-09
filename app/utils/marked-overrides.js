const overrides = {
  marked: {
    code: function (renderer) {
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
        if (!lang) {
          return `<pre><code role="figure" tabindex="0" class="hljs">${code}</code></pre>\n`
        }

        return `<pre><code role="figure" tabindex="0" class="hljs ${this.options.langPrefix}${escape(lang, true)}">${code}</code></pre>\n`
      }
    },
    heading: function (renderer) {
      renderer.heading = function (text, level) {
        const braces = (text || '').match(/\{(.*?)\}/)
        const pageHeading = text.replace(/\{(.*?)\}/, '').trim()
        const id = pageHeading.toLowerCase().replace(/([~!@#$%^&*()_+=`{}[\]|\\:;'<>,./? ])+/g, '-')

        if (braces) {
          const sectionHeading = braces[0].replace(/\{|\}/g, '')

          return `
            <h${level} id="${id}">
              <span class="govuk-caption-xl">
                ${sectionHeading}
              </span>
              ${pageHeading}
            </h${level}>
          `
        }
        return `
          <h${level} id="${id}">
            ${text}
          </h${level}>
        `
      }
    }
  }
}

module.exports = { overrides }
