import { Queue } from '../../utils/queue'
import { show, DialogShowProps } from './show'
const queue = new Queue()
const dialogClose = () => {
  queue.removeFirstQueue()
  if (!queue.isEmpty()) queue.getFirstQueue()()
}
/**
 *  像弹窗序列里增新弹窗
 * @param dialogProps  DialogShowProps
 * @param index? number 从序列某个位置插入，超出序列长度从末尾添加，控制优先级
 */
export function dialogQueue(
  dialogProps: DialogShowProps,
  index?: number
): void {
  push(
    () =>
      show({
        ...dialogProps,
        onClose: () => {
          dialogProps.onClose?.()
          dialogClose()
        },
      }),
    index
  )
}
/**
 * 将弹窗fn推入队列
 * @param fn
 * @param index? number 插入位置
 */
const push = (fn: Function, index?: number) => {
  if (queue.isEmpty()) {
    queue.addQueue(fn, index)
    queue.getFirstQueue()() // 启动出队逻辑
    //TODO 如何加入的第一个执行弹窗是异步的，这里必须等待异步弹窗插入之后方可执行出队逻辑
  } else {
    queue.addQueue(fn, index) // 循环中依然可以同时入队新的元素
  }
}
