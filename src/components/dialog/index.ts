import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import Dialog from './dialog'
import { show } from './show'
import { alert } from './alert'
import { confirm } from './confirm'
import './dialog.scss'

export type { DialogProps } from './dialog'
export type { Action } from './dialog-action-button'
export type { DialogShowProps } from './show'
export type { DialogAlertProps } from './alert'

export default attachPropertiesToComponent(Dialog, {
  show,
  alert,
  confirm,
})
