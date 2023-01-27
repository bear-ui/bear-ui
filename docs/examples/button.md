# Button 按钮

# Icon 图标

b-ui 推荐使用 xicons 作为图标库。

```shell
pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

:::preview title || component description content

demo-preview=./components/icon.vue

:::
--------分割线--------
::: demo

<template #source>
<b-icon color="red" size="20">
<CashOutline />
</b-icon>
<b-icon color="green" size="20">
<CashOutline />
</b-icon>
<Bicon color="blue" size="20">
<CashOutline />
</Bicon>

<br />

</template>

```html
<b-icon color="red" size="20">
  <CashOutline />
</b-icon>
<b-icon color="green" size="20">
  <CashOutline />
</b-icon>
<BIcon color="blue" size="20">
  //此处别名未被处理，另一插件则被处理渲染
  <CashOutline />
</BIcon>
```

:::
