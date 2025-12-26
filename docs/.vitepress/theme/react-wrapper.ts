import { defineComponent, h, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { createRoot, Root } from 'react-dom/client'
import { createElement } from 'react'

export function wrapReact(ReactComponent: any) {
  return defineComponent({
    name: ReactComponent.displayName || ReactComponent.name || 'ReactWrapper',
    inheritAttrs: false,
    setup(props, { attrs }) {
      const rootEl = ref<HTMLElement | null>(null)
      let root: any = null

      const renderReact = () => {
        if (!rootEl.value) return
        
        const { class: className, style, ...restAttrs } = attrs
        const combinedProps = { 
          ...props, 
          ...restAttrs,
          className: className || (attrs.class as string),
          style: style || (attrs.style as any)
        }

        if (!root) {
          root = createRoot(rootEl.value)
        }
        
        root.render(createElement(ReactComponent, combinedProps))
      }

      onMounted(() => {
        // Delay slightly to ensure DOM is ready in all environments
        setTimeout(renderReact, 0)
      })

      onBeforeUnmount(() => {
        if (root) {
          root.unmount()
          root = null
        }
      })
      
      watch(() => ({ ...attrs }), () => {
        if (root) renderReact()
      }, { deep: true })
      
      return () => h('div', { ref: rootEl, class: 'react-wrapper-host' })
    }
  })
}
