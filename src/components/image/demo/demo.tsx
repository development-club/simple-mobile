import React from 'react'
import { Image, Space } from 'simple-mobile'
import { DemoBlock } from 'demos'

const demoSrc =
  'http://car3.autoimg.cn/cardfs/product/g20/M0C/06/2A/248x186_q95_autohomecar__ChsElWB-guGAMHQMAAqaXJvG3Hs873.jpg'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Image src={demoSrc} />
      </DemoBlock>
      <DemoBlock title='多种填充模式'>
        <Space wrap direction='horizontal'>
          <Image src={demoSrc} width={100} height={100} fit='fill' />
          <Image src={demoSrc} width={100} height={100} fit='contain' />
          <Image src={demoSrc} width={100} height={100} fit='cover' />
          <Image src={demoSrc} width={100} height={100} fit='scale-down' />
          <Image src={demoSrc} width={100} height={100} fit='none' />
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义圆角'>
        <Space wrap direction='horizontal'>
          <Image
            src={demoSrc}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 4 }}
          />
          <Image
            src={demoSrc}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 8 }}
          />
          <Image
            src={demoSrc}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 32 }}
          />
        </Space>
      </DemoBlock>
      <DemoBlock title='加载失败'>
        <Image src='/404' width={100} height={100} />
      </DemoBlock>
    </>
  )
}
