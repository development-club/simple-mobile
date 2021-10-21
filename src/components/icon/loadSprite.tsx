import svgIcons from './svg'
const svgSprite = (contents: string) => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="display:none;overflow:hidden;width:0;height:0"
    id="__PLATFORM_SVG_SPRITE_NODE__">
    <defs>
      ${contents}
    </defs>
  </svg>`
const renderSvgSprite = (newIcon: any) => {
  const icons = Object.assign(svgIcons, newIcon)
  const symbols = Object.keys(icons)
    .map(iconName => {
      const svgContent = icons[iconName].split('svg')[1]
      return `<symbol id=${iconName}${svgContent}symbol>`
    })
    .join('')
  return svgSprite(symbols)
}

const loadSprite = (newIcon: any) => {
  if (!document) {
    return
  }
  let existing = document.getElementById('__PLATFORM_SVG_SPRITE_NODE__')
  const bodyNode = document.body
  if (existing) {
    existing.remove()
    existing = null
  }
  if (!existing) {
    bodyNode.insertAdjacentHTML('afterbegin', renderSvgSprite(newIcon))
  }
}

export default loadSprite
