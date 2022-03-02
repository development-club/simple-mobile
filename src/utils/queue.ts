export class Queue {
  private dataStore: any[]
  constructor() {
    this.dataStore = []
  }

  /**
   * 任务推入序列
   * @param fn Function
   */
  public addQueue(fn: Function, index?: number): void {
    if (typeof index === 'number') {
      this.queueInsert(index, fn)
    } else {
      this.dataStore.push(fn)
    }
    console.log('queue:', this.dataStore)
  }
  /**
   *  向序列指定位置插入数据
   * @param index 指定数组修改的开始位置
   * @param fn Function
   */
  public queueInsert(index: number, fn: Function) {
    this.dataStore.splice(index, 0, fn)
  }
  /**
   * 移除序列中第一个任务
   */
  public removeFirstQueue() {
    this.dataStore.shift()
  }
  /**
   * 获取序列中第一个任务
   */
  public getFirstQueue() {
    return this.dataStore[0]
  }
  /**
   * 获取序列最后一个任务
   */
  public getLastQueue() {
    return this.dataStore[this.dataStore.length - 1]
  }
  public isEmpty(): boolean {
    if (this.dataStore.length === 0) {
      return true
    } else {
      return false
    }
  }
  public toString(): string {
    return this.dataStore.join(',')
  }
}
