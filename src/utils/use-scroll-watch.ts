import { useEffect } from 'react'

export default function useScrollWatch(
  domRef: React.MutableRefObject<any>,
  callback: Function,
  watch = []
) {
  const scrollOptions = {
    top: 0,
    scrollHeight: 0,
    offsetHeight: 0,
    isScrollEnd: false,
  }

  useEffect(() => {
    const box = domRef.current
    scrollOptions.scrollHeight = box.scrollHeight
    scrollOptions.offsetHeight = box.offsetHeight
    const handleScroll = () => {
      scrollOptions.top = box.scrollTop
      scrollOptions.isScrollEnd =
        box.scrollTop ===
        scrollOptions.scrollHeight - scrollOptions.offsetHeight
      if (callback instanceof Function) callback(scrollOptions)
    }

    box.addEventListener('scroll', handleScroll)
    return function () {
      box.removeEventListener('scroll', handleScroll)
    }
  }, watch)
  return [scrollOptions, domRef]
}
