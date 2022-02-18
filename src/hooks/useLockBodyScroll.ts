/**
 *
 * @param locked  是否锁定
 * @param elementRef 目标元素，默认 body
 */
export const useLockBodyScroll = (
  locked: boolean,
  elementRef?: React.MutableRefObject<HTMLDivElement> | undefined
) => {
  if (!locked) locked = false
  let ref = document.body
  if (elementRef) ref = elementRef.current
  /**
   * 禁用 body 滚动
   */
  const disableBodyScroll = () => {
    // 低版本ios 弹窗定位不准，所以加个定时 遮罩出现不可滚动
    setTimeout(
      () =>
        window.requestAnimationFrame(() => {
          const scrollTop = ref.scrollTop || document.documentElement.scrollTop
          const top = scrollTop > 0 ? `top:-${scrollTop}px;` : ''
          let style = ''
          if (ref.tagName === 'BODY') style = 'position:fixed;width:100%;'
          ref.setAttribute('style', `${style}overflow:hidden;${top}`)
        }),
      300
    )
  }
  /**
   * 启用 body 滚动,并保持当前滚动位置
   */
  const enableBodyScroll = () => {
    ref.style.position = ''
    ref.style.width = ''
    ref.style.overflow = ''
    ref.scrollTop = document.documentElement.scrollTop = -parseInt(
      ref.style.top
    )
    ref.style.top = ''
  }
  /**
   * 清除 body style
   */
  const clearBodyScrollLock = (
    el: React.MutableRefObject<HTMLDivElement> | undefined
  ) => {
    let ref = document.body
    if (el) ref = el.current
    ref.setAttribute('style', '')
  }
  if (locked) {
    disableBodyScroll()
  } else {
    enableBodyScroll()
  }
}
