// 插件
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import bDemo from './components/b-demo.vue'
import { AddCircle, CashOutline } from '@vicons/ionicons5'

// 引入自己组件
import BIcon from '@bear-ui/components/icon'
import '@bear-ui/theme-chalk/src/index.scss'
console.log(BIcon)

export function useComponents(app) {
  app.component('BIcon', BIcon)
  app.component('demo-preview', AntDesignContainer)
  app.component('b-demo', bDemo)
  app.component('AddCircle', AddCircle)
  app.component('CashOutline', CashOutline)
}
