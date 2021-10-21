import React, { useEffect, useState, useRef, FC } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import {
  ElementProps,
  useInitialized,
  mergeProps,
  GetContainer,
  renderToContainer,
} from '../../utils'
import { letterList } from './letter'
import './letter.scss'

const classPrefix = `ah-letter`

export interface LetterProps {
  letterOffset?: Array<{ top: number; letter: string }>
  currentLetter?: string
  className?: string
  style?: React.CSSProperties
  checkClassName?: string // 选择字母的样式
  direction?: string // 位置方向 left | right
}

const defaultProps = {
  letterOffset: letterList,
  currentLetter: 'A',
  direction: 'right',
}

/**
 *  字母分类位置定位
 * @param callback
 */
export const letterPosition = (letterOffset: [], callback: Function) => {
  letterOffset.forEach((item, index) => {
    if (callback instanceof Function) callback(item, index)
  })
}
/**
 * 字母导航
 * @param p
 */
const Letter: FC<LetterProps> = p => {
  const props: any = mergeProps(defaultProps, p)
  const [list, setList] = useState([])
  const clickHandle = (letter: string) => {
    letterPosition(props.letterOffset, (item: any) => {
      if (item.letter === letter) {
        const dom = document.querySelector(`.${classPrefix}-position`)
        if (dom) dom.scrollTop = item.top
      }
    })
  }
  useEffect(() => {
    console.log('letterOffset:', props.letterOffset)
  }, [props.letterOffset])
  // useEffect(() => {
  //  if(props.letterOffset.length) setList(props.letterOffset)
  // },[props.letterOffset])
  return (
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${props.direction}`,
        props.className
      )}
      style={props.style}
    >
      <ul>
        {props.letterOffset.map((item: any) =>
          item ? (
            <li
              key={item.letter}
              className={classNames(
                item.letter === props.currentLetter ? 'active' : '',
                props.checkClassName
              )}
              onClick={() => clickHandle(item.letter)}
            >
              <span>{item.letter}</span>
            </li>
          ) : (
            ''
          )
        )}
      </ul>
    </div>
  )
}

export default Letter
