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
  PeacockToaster,
  PeacockCheckbox,
  PeacockRadioGroup,
  PeacockSelect,
  PeacockTextarea,
  PeacockPopover,
  PeacockProgress,
  PeacockScrollArea,
  PeacockSeparator,
  PeacockAlertDialog,
  PeacockContextMenu,
  PeacockHoverCard,
  PeacockMenubar,
  PeacockLabel,
  PeacockToggle,
  PeacockSheet,
  PeacockTable,
  PeacockBreadcrumb,
  PeacockCarousel,
  PeacockDrawer
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
import { DropdownMenuDemo } from '../../demos/DropdownMenuDemo'
import { AccordionDemo } from '../../demos/AccordionDemo'
import { ThemeDemo } from '../../demos/ThemeDemo'
import { ComponentPreview } from '../../demos/ComponentPreview'
import { HeroDemos } from '../../demos/HeroDemos'
import { Credits } from '../../demos/Credits'
import { PhysicsDemo } from '../../demos/PhysicsDemo'
import { CheckboxDemo } from '../../demos/CheckboxDemo'
import { RadioGroupDemo } from '../../demos/RadioGroupDemo'
import { SelectDemo } from '../../demos/SelectDemo'
import { TextareaDemo } from '../../demos/TextareaDemo'
import { PopoverDemo } from '../../demos/PopoverDemo'
import { ProgressDemo } from '../../demos/ProgressDemo'
import { ScrollAreaDemo } from '../../demos/ScrollAreaDemo'
import { SeparatorDemo } from '../../demos/SeparatorDemo'
import { AlertDialogDemo } from '../../demos/AlertDialogDemo'
import { ContextMenuDemo } from '../../demos/ContextMenuDemo'
import { HoverCardDemo } from '../../demos/HoverCardDemo'
import { MenubarDemo } from '../../demos/MenubarDemo'
import { LabelDemo } from '../../demos/LabelDemo'
import { ToggleDemo } from '../../demos/ToggleDemo'
import { SheetDemo } from '../../demos/SheetDemo'
import { TableDemo } from '../../demos/TableDemo'
import { BreadcrumbDemo } from '../../demos/BreadcrumbDemo'
import { CarouselDemo } from '../../demos/CarouselDemo'
import { DrawerDemo } from '../../demos/DrawerDemo'

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
    app.component('PeacockCheckbox', wrapReact(PeacockCheckbox))
    app.component('PeacockRadioGroup', wrapReact(PeacockRadioGroup))
    app.component('PeacockSelect', wrapReact(PeacockSelect))
    app.component('PeacockTextarea', wrapReact(PeacockTextarea))
    app.component('PeacockPopover', wrapReact(PeacockPopover))
    app.component('PeacockProgress', wrapReact(PeacockProgress))
    app.component('PeacockScrollArea', wrapReact(PeacockScrollArea))
    app.component('PeacockSeparator', wrapReact(PeacockSeparator))
    app.component('PeacockAlertDialog', wrapReact(PeacockAlertDialog))
    app.component('PeacockContextMenu', wrapReact(PeacockContextMenu))
    app.component('PeacockHoverCard', wrapReact(PeacockHoverCard))
    app.component('PeacockMenubar', wrapReact(PeacockMenubar))
    app.component('PeacockLabel', wrapReact(PeacockLabel))
    app.component('PeacockToggle', wrapReact(PeacockToggle))
    app.component('PeacockSheet', wrapReact(PeacockSheet))
    app.component('PeacockTable', wrapReact(PeacockTable))
    app.component('PeacockBreadcrumb', wrapReact(PeacockBreadcrumb))
    app.component('PeacockCarousel', wrapReact(PeacockCarousel))
    app.component('PeacockDrawer', wrapReact(PeacockDrawer))

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
    app.component('DropdownMenuDemo', wrapReact(DropdownMenuDemo))
    app.component('AccordionDemo', wrapReact(AccordionDemo))
    app.component('ThemeDemo', wrapReact(ThemeDemo))
    app.component('ComponentPreview', wrapReact(ComponentPreview))
    app.component('HeroDemos', wrapReact(HeroDemos))
    app.component('Credits', wrapReact(Credits))
    app.component('PhysicsDemo', wrapReact(PhysicsDemo))
    app.component('CheckboxDemo', wrapReact(CheckboxDemo))
    app.component('RadioGroupDemo', wrapReact(RadioGroupDemo))
    app.component('SelectDemo', wrapReact(SelectDemo))
    app.component('TextareaDemo', wrapReact(TextareaDemo))
    app.component('PopoverDemo', wrapReact(PopoverDemo))
    app.component('ProgressDemo', wrapReact(ProgressDemo))
    app.component('ScrollAreaDemo', wrapReact(ScrollAreaDemo))
    app.component('SeparatorDemo', wrapReact(SeparatorDemo))
    app.component('AlertDialogDemo', wrapReact(AlertDialogDemo))
    app.component('ContextMenuDemo', wrapReact(ContextMenuDemo))
    app.component('HoverCardDemo', wrapReact(HoverCardDemo))
    app.component('MenubarDemo', wrapReact(MenubarDemo))
    app.component('LabelDemo', wrapReact(LabelDemo))
    app.component('ToggleDemo', wrapReact(ToggleDemo))
    app.component('SheetDemo', wrapReact(SheetDemo))
    app.component('TableDemo', wrapReact(TableDemo))
    app.component('BreadcrumbDemo', wrapReact(BreadcrumbDemo))
    app.component('CarouselDemo', wrapReact(CarouselDemo))
    app.component('DrawerDemo', wrapReact(DrawerDemo))
  }
}
