import { defineComponent, h, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { createRoot, Root } from 'react-dom/client'
import { createElement } from 'react'

export function wrapReact(ReactComponent: any) {
  return defineComponent({
    name: ReactComponent.displayName || ReactComponent.name || 'ReactWrapper',
    inheritAttrs: false,
    setup(props, { attrs }) {
      const rootEl = ref<HTMLElement | null>(null)
      let root: Root | null = null

      const renderReact = () => {
        if (!rootEl.value) return
        if (!root) root = createRoot(rootEl.value)
        
        const { class: className, style, ...restAttrs } = attrs
        const combinedProps = { 
          ...props, 
          ...restAttrs,
          className: className || (attrs.class as string),
          style: style || (attrs.style as any)
        }
        
        root.render(createElement(ReactComponent, combinedProps))
      }

      onMounted(renderReact)
      onBeforeUnmount(() => {
        if (root) {
          root.unmount()
          root = null
        }
      })
      
      watch(() => ({ ...attrs }), renderReact, { deep: true })
      
      return () => h('div', { ref: rootEl })
    }
  })
}
