# 主题

得益于 CSS 变量强大而灵活的能力，自定义一套 simple-mobile 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接修在 `:root` 覆盖 CSS 变量就可以了：

```css
:root {
  --ah-color-primary: #a062d4;
}
```

当然如果你只是希望对局部的主题进行调整，也可以把上面的 CSS 变量覆盖逻辑加在任何一个你想调整的节点上，例如：

```css
.purple-theme {
  --ah-color-primary: #a062d4;
}
```

```jsx
<div className='purple-theme'>
  <Button color='primary'>Purple</Button>
</div>
```

可以得到这样的一个按钮：

```jsx | preview
/**
 * inline: true
 */

import React from 'react'
import { Button } from 'simple-mobile'

export default () => {
  return (
    <div style={{
      ['--ah-color-primary']: '#a062d4',
    }}>
      <Button color='primary'>Purple</Button>
    </div>
  )
}
```

以下是 simple-mobile 目前提供的全局性 CSS 变量：

```css
:root {
  --ah-color-primary: #1677ff;
  --ah-color-success: #00b578;
  --ah-color-warning: #ff8f1f;
  --ah-color-danger: #ff3141;
  --ah-color-white: #ffffff;
  --ah-color-weak: #999999;
  --ah-color-light: #cccccc;
  --ah-border-color: #eeeeee;
  --ah-font-size-main: 13px;
  --ah-color-text: #333333;

  --ah-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
  helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
  'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;

  --ah-z-index-mask: 1000;
  --ah-z-index-popup: 1000;
  --ah-z-index-popover: 1030;
  --ah-z-index-floating-panel: 900;
}
```
