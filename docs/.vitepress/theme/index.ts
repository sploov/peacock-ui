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

import { SwitchDemo } from '../../demos/SwitchDemo'
import { DialogDemo } from '../../demos/DialogDemo'
import { CommandDemo } from '../../demos/CommandDemo'
import { ToastDemo } from '../../demos/ToastDemo'
import { DockDemo } from '../../demos/DockDemo'
import { MenuDemo } from '../../demos/MenuDemo'
import { FluidCardDemo } from '../../demos/FluidCardDemo'

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

    // Demos
    app.component('SwitchDemo', wrapReact(SwitchDemo))
    app.component('DialogDemo', wrapReact(DialogDemo))
    app.component('CommandDemo', wrapReact(CommandDemo))
    app.component('ToastDemo', wrapReact(ToastDemo))
    app.component('DockDemo', wrapReact(DockDemo))
    app.component('MenuDemo', wrapReact(MenuDemo))
    app.component('FluidCardDemo', wrapReact(FluidCardDemo))
  }
}
