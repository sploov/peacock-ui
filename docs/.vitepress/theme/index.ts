import DefaultTheme from 'vitepress/theme'
import './custom.css'
import '../../../src/themes/globals.css'
import { 
  PeacockButton, 
  PeacockBadge, 
  PeacockInput, 
  PeacockSwitch,
  FluidCard,
  GlassMenu,
  PeacockTooltip,
  MotionProvider,
  PeacockProvider
} from '../../../src'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PeacockButton', PeacockButton)
    app.component('PeacockBadge', PeacockBadge)
    app.component('PeacockInput', PeacockInput)
    app.component('PeacockSwitch', PeacockSwitch)
    app.component('FluidCard', FluidCard)
    app.component('GlassMenu', GlassMenu)
    app.component('PeacockTooltip', PeacockTooltip)
    app.component('MotionProvider', MotionProvider)
    app.component('PeacockProvider', PeacockProvider)
  }
}
