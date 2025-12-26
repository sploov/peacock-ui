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
import { SliderDemo } from '../../demos/SliderDemo'
import { AvatarDemo } from '../../demos/AvatarDemo'
import { HolographicCardDemo } from '../../demos/HolographicCardDemo'
import { ButtonDemo } from '../../demos/ButtonDemo'
import { BadgeDemo } from '../../demos/BadgeDemo'
import { TooltipDemo } from '../../demos/TooltipDemo'
import { InputDemo } from '../../demos/InputDemo'
import { SkeletonDemo } from '../../demos/SkeletonDemo'
import { CodeDemo } from '../../demos/CodeDemo'
import { TabsDemo } from '../../demos/TabsDemo'
import { ComponentPreview } from '../../demos/ComponentPreview'
import { HeroDemos } from '../../demos/HeroDemos'

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
    app.component('SliderDemo', wrapReact(SliderDemo))
    app.component('AvatarDemo', wrapReact(AvatarDemo))
    app.component('HolographicCardDemo', wrapReact(HolographicCardDemo))
    app.component('ButtonDemo', wrapReact(ButtonDemo))
    app.component('BadgeDemo', wrapReact(BadgeDemo))
    app.component('TooltipDemo', wrapReact(TooltipDemo))
    app.component('InputDemo', wrapReact(InputDemo))
    app.component('SkeletonDemo', wrapReact(SkeletonDemo))
    app.component('CodeDemo', wrapReact(CodeDemo))
    app.component('TabsDemo', wrapReact(TabsDemo))
    app.component('ComponentPreview', wrapReact(ComponentPreview))
    app.component('HeroDemos', wrapReact(HeroDemos))
  }
}
