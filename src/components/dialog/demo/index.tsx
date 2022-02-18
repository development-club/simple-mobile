import React, { useState } from 'react'
import { Toast } from 'simple-mobile'
import { sleep, Queue } from 'utils'
import { Button, Dialog, Icon, Space } from 'simple-mobile'
import { DemoBlock, DemoDescription, lorem } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() =>
              Dialog.alert({
                content: '黄河之水天上来',
              })
            }
          >
            最简单的小对话框
          </Button>
          <Button
            block
            onClick={() => {
              Dialog.alert({
                content: '点击遮罩关闭',
                closeOnMaskClick: true,
              })
            }}
          >
            点击遮罩关闭
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='操作按钮'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() => {
              Dialog.show({
                content: '黄河之水天上来',
                closeOnAction: true,
                actions: [
                  {
                    key: 'online',
                    text: '在线阅读',
                  },
                  {
                    key: 'download',
                    text: '下载文件',
                  },
                  [
                    {
                      key: 'cancel',
                      text: '取消',
                    },
                    {
                      key: 'delete',
                      text: '删除',
                      bold: true,
                      danger: true,
                    },
                  ],
                ],
              })
            }}
          >
            自定义按钮
          </Button>
          <DemoDescription content='如果你想完全自由地控制按钮区域，那么可以通过 actions 参数来自定义操作按钮，当传入一个二级数组时，可以在同一行内并排放置多个按钮' />

          <Button
            block
            onClick={() =>
              Dialog.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000)
                  Toast.show({
                    icon: 'success',
                    content: '提交成功',
                    position: 'bottom',
                  })
                },
              })
            }
          >
            异步操作执行成功
          </Button>
          <Button
            block
            onClick={() =>
              Dialog.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000)
                  Toast.show({
                    icon: 'fail',
                    content: '提交失败',
                    position: 'bottom',
                  })
                  throw new Error()
                },
              })
            }
          >
            异步操作执行失败
          </Button>
          <DemoDescription content='onAction、onConfirm、onCancel、onClick 这些事件函数都支持返回一个 Promise，通过这种方式，可以让按钮在执行异步操作的时候变为加载状态' />
        </Space>
      </DemoBlock>

      <DemoBlock title='内容区域'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={() => {
              Dialog.alert({
                header: <Icon type='close' />,
                title: '注意',
                content: (
                  <>
                    <div>请用手机拍摄手持工牌照，注意保持照片清晰</div>
                    <div>
                      详情说明请查阅<a>操作指引</a>
                    </div>
                  </>
                ),
              })
            }}
          >
            自定义内容区域
          </Button>
          <Button
            block
            onClick={() => {
              Dialog.alert({
                image:
                  'https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ',
                title: '手持工牌照示例',
                content: '请用手机拍摄手持工牌照，注意保持照片清晰',
              })
            }}
          >
            有标题和图片
          </Button>
          <Button
            block
            onClick={() =>
              Dialog.confirm({
                title: '提示',
                content: lorem.generateParagraphs(7),
              })
            }
          >
            超长文本
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='获取点击结果'>
        <Space direction='vertical' block>
          <Button
            block
            onClick={async () => {
              await Dialog.alert({
                content: '黄河之水天上来',
              })
              Toast.show({ content: '已关闭', position: 'bottom' })
            }}
          >
            等待 alert 完成
          </Button>
          <DemoDescription content='alert 和 confirm 方法都会返回一个 Promise，你可以通过这个 Promise 实现等待弹窗关闭' />

          <Button
            block
            onClick={async () => {
              const result = await Dialog.confirm({
                content: '黄河之水天上来',
              })
              if (result) {
                Toast.show({ content: '点击了确认', position: 'bottom' })
              } else {
                Toast.show({ content: '点击了取消', position: 'bottom' })
              }
            }}
          >
            等待 confirm 完成
          </Button>
          <DemoDescription content='confirm 返回的是 Promise<boolean> 你可以通过这个 boolean 来判断用户是点击的确认还是取消' />
        </Space>
      </DemoBlock>

      <DemoBlock title='声明式'>
        <Space direction='vertical' block>
          <Declarative />
          <DemoDescription content='你可以手动控制 visible 状态' />
        </Space>
      </DemoBlock>
      <DemoBlock title='序列化弹窗'>
        <Space direction='vertical' block>
          <Button block onClick={outQueue}>
            队列优先级弹窗
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}

const Declarative = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        block
        onClick={() => {
          setVisible(true)
        }}
      >
        显示对话框
      </Button>
      <Dialog
        visible={visible}
        content='黄河之水天上来'
        closeOnAction
        onClose={() => {
          setVisible(false)
        }}
        actions={[
          {
            key: 'confirm',
            text: '我知道了',
          },
        ]}
      />
    </>
  )
}

const outQueue = () => {
  const queue = new Queue() // 实例化队列类
  const eventClose = () => {
    queue.removeFirstQueue()
    if (!queue.isEmpty()) {
      queue.getFirstQueue()() // 启动出队逻辑
    }
  }
  const one = () =>
    Dialog.show({
      content: '黄河之水天上来',
      closeOnAction: true,
      actions: [
        {
          key: 'online',
          text: '在线阅读',
        },
        {
          key: 'download',
          text: '下载文件',
        },
        [
          {
            key: 'cancel',
            text: '取消',
          },
          {
            key: 'delete',
            text: '删除',
            bold: true,
            danger: true,
          },
        ],
      ],
      onClose: eventClose,
    })
  const two = () =>
    Dialog.show({
      content: '奔流到海不复返',
      visibleCloseBtn: true,
      closeOnAction: true,
      actions: [
        [
          {
            key: 'cancel',
            text: '取消',
          },
          {
            key: ' close',
            text: '关闭',
            bold: true,
            danger: true,
          },
        ],
      ],
      onClose: eventClose,
    })
  const three = () =>
    Dialog.show({
      content: '点蒙层关闭',
      closeOnMaskClick: true,
      onClose: eventClose,
    })
  /**
   * 将弹窗fn推入队列
   * @param fn
   */
  const push = (fn: Function) => {
    if (queue.isEmpty()) {
      queue.addQueue(fn)
      queue.getFirstQueue()() // 启动出队逻辑
    } else {
      queue.addQueue(fn) // 循环中依然可以同时入队新的元素
    }
  }

  push(one)
  push(two)
  push(three)
}
