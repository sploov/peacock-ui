import { defineComponent, h, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { createRoot, Root } from 'react-dom/client'
import { createElement } from 'react'

export function wrapReact(ReactComponent: any) {
  return defineComponent({
    name: ReactComponent.displayName || ReactComponent.name || 'ReactWrapper',
    props: {
      // Allow any props
    },
    setup(props, { attrs, slots }) {
      const rootEl = ref<HTMLElement | null>(null)
      let root: Root | null = null

      const update = () => {
        if (!rootEl.value) return
        if (!root) root = createRoot(rootEl.value)
        
        // Combine props and attrs
        const { class: className, style, ...restAttrs } = attrs
        const combinedProps = { 
          ...props, 
          ...restAttrs,
          className: className || props.className,
          style: style || props.style
        }
        
        // If there are slots, we might want to handle children, but bridging Vue slots to React children is complex.
        // For simple demos, we usually pass children as props or text.
        // But let's try to handle simple text content if possible, or just ignore slots for now
        // and rely on props.children if passed explicitly?
        // Actually, let's just pass text content from the default slot if available.
        
        let children = null
        if (slots.default) {
             // Basic text extraction from Vue slot (very limited)
             // Real slot bridging is hard.
             // We will assume usage like <PeacockButton>Text</PeacockButton> 
             // where the slot content is just text.
             const vnodes = slots.default()
             if (vnodes && vnodes.length > 0) {
                 children = vnodes.map(v => v.children).join('')
             }
        }
        
        root.render(createElement(ReactComponent, combinedProps, children))
      }

      onMounted(update)
      onBeforeUnmount(() => {
        if (root) root.unmount()
      })
      
      // Watch for changes (this is a bit aggressive, but works for simple demos)
      // attrs are reactive in setup
      
      return () => h('div', { ref: rootEl })
    }
  })
}
