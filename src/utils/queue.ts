export class Queue {
  private dataStore: any[]
  constructor() {
    this.dataStore = []
  }
  public addQueue(e: any): void {
    this.dataStore.push(e)
  }
  public removeFirstQueue() {
    this.dataStore.shift()
  }
  public getFirstQueue() {
    return this.dataStore[0]
  }
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
