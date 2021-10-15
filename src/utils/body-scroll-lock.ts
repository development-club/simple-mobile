/**
 * 禁用 body 滚动
 */
const disableBodyScroll = () => {
  // 低版本ios 弹窗定位不准，所以加个定时 遮罩出现不可滚动
  setTimeout(
    () =>
      window.requestAnimationFrame(() => {
        const body = document.body
        const scrollTop = body.scrollTop || document.documentElement.scrollTop
        const top = scrollTop > 0 ? `top:-${scrollTop}px;` : ''
        body.setAttribute(
          'style',
          `position:fixed;width:100%;overflow:hidden;${top}`
        )
      }),
    300
  )
}
/**
 * 启用 body 滚动,并保持当前滚动位置
 */
const enableBodyScroll = () => {
  const body = document.body
  body.style.position = ''
  body.style.width = ''
  body.style.overflow = ''
  body.scrollTop = document.documentElement.scrollTop = -parseInt(
    body.style.top
  )
  body.style.top = ''
}

const clearBodyScrollLock = () => document.body.setAttribute('style', '')

export { disableBodyScroll, enableBodyScroll, clearBodyScrollLock }
