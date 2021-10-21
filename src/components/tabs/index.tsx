import React, { FC, ReactNode, ReactElement, ComponentProps } from 'react'
import classNames from 'classnames'
import {
  ElementProps,
  attachPropertiesToComponent,
  useNewControllableValue,
  getNativeAttributes,
} from 'utils'
import './tabs.scss'
const classPrefix = `ah-tabs`

export type TabPaneProps = {
  title: ReactNode
  forceRender?: boolean
}

export const TabPane: FC<TabPaneProps> = () => {
  return null
}

export type TabsProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (val: string) => void
} & ElementProps

const Tabs: FC<TabsProps> = props => {
  const childrenRecord: Record<string, ReactNode> = {}
  let firstActiveKey: string | null = null

  const panes: ReactElement<ComponentProps<typeof TabPane>>[] = []

  React.Children.forEach(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    if (index === 0) {
      firstActiveKey = key
    }
    childrenRecord[key] = child.props.children
    panes.push(child)
  })
  const options: any = {
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: props.onChange,
  }
  const [activeKey, setActiveKey] = useNewControllableValue(options)

  return (
    <div
      {...getNativeAttributes(props)}
      className={classNames(classPrefix, props.className)}
      style={props.style}
    >
      <div className={`${classPrefix}-tab-list`}>
        {panes.map(pane => (
          <div
            key={pane.key}
            {...getNativeAttributes(pane.props)}
            className={`${classPrefix}-tab-wrapper`}
          >
            <div
              onClick={() => {
                const { key } = pane
                if (key === undefined || key === null) {
                  return
                }
                setActiveKey(key.toString())
              }}
              className={classNames(`${classPrefix}-tab`, {
                [`${classPrefix}-tab-active`]: pane.key === activeKey,
              })}
            >
              {pane.props.title}
            </div>
          </div>
        ))}
      </div>
      {panes.map(pane => {
        if (pane.props.children === undefined) {
          return null
        }
        if (pane.key === activeKey) {
          return (
            <div key={pane.key} className={`${classPrefix}-content`}>
              {pane.props.children}
            </div>
          )
        }
        if (pane.props.forceRender) {
          return (
            <div key={pane.key} style={{ display: 'none' }}>
              {pane.props.children}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default attachPropertiesToComponent(Tabs, {
  TabPane,
})
