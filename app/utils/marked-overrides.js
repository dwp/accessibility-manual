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
          return `<pre tabindex="0"><code>${(escaped ? code : escape(code, true))}</code></pre>\n`
        }

        return `<pre tabindex="0"><code class="${this.options.langPrefix}${escape(lang, true)}">${(escaped ? code : escape(code, true))}</code></pre>\n`
      }
    },
    heading: function (renderer) {
      renderer.heading = function (text, level) {
        const braces = (text || '').match(/\{(.*?)\}/)
        const pageHeading = text.replace(/\{(.*?)\}/, '').trim()
        if (braces) {
          const sectionHeading = braces[0].replace(/\{|\}/g, '')
          return `
            <h${level}>
              <span class="govuk-caption-xl">
                ${sectionHeading}
              </span>
              ${pageHeading}
            </h${level}>
          `
        }
        return `
          <h${level}>
            ${text}
          </h${level}>
        `
      }
    }
  }
}

module.exports = { overrides }
