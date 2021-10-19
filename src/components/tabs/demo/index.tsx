import React from 'react'
import { Tabs } from 'simple-mobile'
import { DemoBlock } from '../../../demos'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <Tabs>
          <Tabs.TabPane title='北京' key='beijing'>
            北京
          </Tabs.TabPane>
          <Tabs.TabPane title='上海' key='shanghai'>
            上海
          </Tabs.TabPane>
          <Tabs.TabPane title='广州' key='guangzhou'>
            广州
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title='超出自动滚动' padding='0'>
        <Tabs>
          <Tabs.TabPane title='tab-tab-tab-tab-1' key='1'>
            1
          </Tabs.TabPane>
          <Tabs.TabPane title='tab-tab-tab-2' key='2'>
            2
          </Tabs.TabPane>
          <Tabs.TabPane title='tab-tab3' key='3'>
            3
          </Tabs.TabPane>
          <Tabs.TabPane title='tab-tab4' key='4'>
            4
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title='无内容区' padding='0'>
        <Tabs>
          <Tabs.TabPane title='北京' key=' beijing' />
          <Tabs.TabPane title='上海' key='shanghai' />
          <Tabs.TabPane title='广州' key='guangzhou' />
        </Tabs>
      </DemoBlock>
    </>
  )
}
