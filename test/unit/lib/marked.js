const fs = require('fs')
const chai = require('chai')
const markdown = require('../../../app/lib/markdown')
markdown.setup()

const expect = require('chai').expect
chai.use(require('chai-string'))

describe('markdown', () => {
  it('should render a heading with a slugified id and a tabindex of -1', () => {
    const expectedResult = `
      <h1 id="potatoes-are-great" class="heading" tabindex="-1">
        Potatoes are great
      </h1>
    `
    const result = markdown.compile('# Potatoes are great')
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })

  it('should render a heading with caption if braces are used', () => {
    const expectedResult = `
      <h1 id="potatoes" class="heading" tabindex="-1">
        <span class="caption">
          What are great?
        </span>
        Potatoes
      </h1>
    `
    const result = markdown.compile('# {What are great?} Potatoes')
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })

  it('should render a codeblock with a language class for html', async () => {
    const testEntry = await fs.readFileSync('test/assets/example-code.md', 'utf8')
    const expectedResult = await fs.readFileSync('test/assets/example-code.html', 'utf8')
    const result = markdown.compile(testEntry)
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })

  it('should render a codeblock without a laguage class for plaintext', async () => {
    const testEntry = await fs.readFileSync('test/assets/example-code-plaintext.md', 'utf8')
    const expectedResult = await fs.readFileSync('test/assets/example-code-plaintext.html', 'utf8')
    const result = markdown.compile(testEntry)
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })

  it('should render a inline code within a paragraph', async () => {
    const testEntry = 'You can use an `<a>` tag'
    const expectedResult = '<p>You can use an <code>&lt;a&gt;</code> tag</p>'
    const result = markdown.compile(testEntry)
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })

  it('should render raw opening tags: eg $ div', async () => {
    const testEntry = '$ div #testID .testID'
    const expectedResult = '<div id="testID" class="testID">'
    const result = markdown.compile(testEntry)
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })

  it('should render raw closing tags: eg $ /div', async () => {
    const testEntry = '$ /div'
    const expectedResult = '</div>'
    const result = markdown.compile(testEntry)
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })

  it('should render a dl with dd and dt', async () => {
    const testEntry = await fs.readFileSync('test/assets/example-description-list.md', 'utf8')
    const expectedResult = await fs.readFileSync('test/assets/example-description-list.html', 'utf8')
    const result = markdown.compile(testEntry)
    expect(result).to.equalIgnoreSpaces(expectedResult)
  })
})
