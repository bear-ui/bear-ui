import DefaultTheme from 'vitepress/theme'

import { useComponents } from './useComponents'
import { App } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    useComponents(app)
  }
}
