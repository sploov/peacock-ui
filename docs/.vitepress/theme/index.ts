import DefaultTheme from 'vitepress/theme'
import './custom.css'
import '../../../src/themes/globals.css'
import { wrapReact } from './react-wrapper'
import { 
  PeacockButton, 
  PeacockBadge, 
  PeacockInput, 
  PeacockSwitch,
  FluidCard,
  PeacockTooltip,
  HolographicCard,
  PeacockDock,
  PeacockSlider,
  PeacockAvatar,
  PeacockSkeleton,
  PeacockCode,
  PeacockToaster
} from '../../../src'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PeacockButton', wrapReact(PeacockButton))
    app.component('PeacockBadge', wrapReact(PeacockBadge))
    app.component('PeacockInput', wrapReact(PeacockInput))
    app.component('PeacockSwitch', wrapReact(PeacockSwitch))
    app.component('FluidCard', wrapReact(FluidCard))
    app.component('PeacockTooltip', wrapReact(PeacockTooltip))
    app.component('HolographicCard', wrapReact(HolographicCard))
    app.component('PeacockDock', wrapReact(PeacockDock))
    app.component('PeacockSlider', wrapReact(PeacockSlider))
    app.component('PeacockAvatar', wrapReact(PeacockAvatar))
    app.component('PeacockSkeleton', wrapReact(PeacockSkeleton))
    app.component('PeacockCode', wrapReact(PeacockCode))
    app.component('PeacockToaster', wrapReact(PeacockToaster))
  }
}
