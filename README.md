# v-tips

> 开箱即用的vue tips指令

## 使用

0. 下载

```bash
npm install v-tips -s
yarn add v-tips
```

1. 注册

```javascript
import Vue from 'vue'
import Tips from 'v-tips'

Vue.use(Tips)
```

2. 使用指令

```html
<!-- vue 文件 -->
<template>
  <!-- 参数为string | number 用户hover active focus 控制tips显示 -->
  <button v-tips="tips">tips</button>
</template>
<script>
export default {
  name: 'xxx',
  data () {
    return {
      tips: 'hello tips'
    }
  }
}
</script>
```

3. 控制tips

```html
<!-- vue 文件 -->
<template>
  <!-- 参数为object 自行控制tips显示 -->
  <!--  this.message % 2 === 0 时显示tips -->
  <button v-tips="tips">tips</button>
</template>
<script>
export default {
  name: 'xxx',
  data () {
    return {
      num: 1
    }
  },
  created () {
    setInterval(() => {
      this.message += 1
    }, 1000)
  },
  computed: {
    tips () {
      return {
        message: this.message,
        show: this.message % 2 === 0
      }
    }
  }
}
</script>
```
### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/v-tips/dist/v-tips.min.js"></script>
```

### TODO

- [] 添加动效
