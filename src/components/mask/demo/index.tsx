import React, { useState, FC } from 'react'
import { Mask, Button, Space } from 'simple-mobile'
import { DemoBlock } from 'demos'
import './demo.scss'

const Simple: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} />
      <Button onClick={() => setVisible(true)}>显示遮罩层</Button>
    </>
  )
}

const WithContent: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div className='overlayContent'>内容</div>
      </Mask>
      <Button onClick={() => setVisible(true)}>显示带内容的遮罩层</Button>
    </>
  )
}

const Dark: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity='dark'
      />
      <Button onClick={() => setVisible(true)}>显示深色的遮罩层</Button>
    </>
  )
}

const CustomOpacity: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity={0.3}
      />
      <Button onClick={() => setVisible(true)}>显示自定义透明度的遮罩层</Button>
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Simple />
      </DemoBlock>
      <DemoBlock title='遮罩层的颜色深度'>
        <Space wrap>
          <Dark />
          <CustomOpacity />
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义内容'>
        <WithContent />
      </DemoBlock>
    </>
  )
}
