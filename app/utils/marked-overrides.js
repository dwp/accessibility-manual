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
    }
  }
}

module.exports = { overrides }
