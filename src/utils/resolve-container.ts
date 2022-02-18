import { GetContainer } from './index'
export function resolveContainer(getContainer: GetContainer) {
  const container =
    typeof getContainer === 'function' ? getContainer() : getContainer
  return container || document.body
}
