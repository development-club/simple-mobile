import { attachPropertiesToComponent } from '../../utils'
import { Step } from './step'
import { Steps } from './steps'
import './steps.scss'

export type { StepsProps } from './steps'
export type { StepProps } from './step'

export default attachPropertiesToComponent(Steps, {
  Step,
})
