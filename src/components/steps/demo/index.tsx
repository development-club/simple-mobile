import React from 'react'
import { DemoBlock } from 'demos'
import { Steps } from 'simple-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='横向'>
        <Steps current={-1} direction='horizontal'>
          <Steps.Step title='标题1' description='描述' />
          <Steps.Step title='标题2' description='描述' />
          <Steps.Step title='标题3' description='描述' />
        </Steps>
      </DemoBlock>

      <DemoBlock title='横向（失败状态）'>
        <Steps current={2} direction='horizontal'>
          <Steps.Step title='第一步' />
          <Steps.Step title='第二步' />
          <Steps.Step title='第三步' status='error' />
        </Steps>
      </DemoBlock>

      <DemoBlock title='纵向'>
        <Steps current={1} direction='vertical'>
          <Steps.Step title='填写机构信息' status='process' />
          <Steps.Step title='签约机构' status='wait' />
          <Steps.Step title='关联服务区' status='wait' />
        </Steps>
      </DemoBlock>

      <DemoBlock title='纵向（失败状态）'>
        <Steps direction='vertical' current={1}>
          <Steps.Step
            title='填写机构信息'
            status='finish'
            description='完成时间：2020-12-01 12:30'
          />
          <Steps.Step
            title='签约机构'
            status='finish'
            description='完成时间：2020-12-01 12:30'
          />
          <Steps.Step
            title='关联服务区'
            status='finish'
            description='完成时间：2020-12-01 12:30'
          />
          <Steps.Step title='审批失败' status='error' />
        </Steps>
      </DemoBlock>
    </>
  )
}
