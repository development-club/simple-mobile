// const pxToRem = require('postcss-pxtorem')

const navs = [
  {
    title: '指南',
    path: '/guide',
  },
  {
    title: '组件',
    path: '/components',
  },
  {
    title: '发布日志',
    path: 'https://github.com/ant-design/ant-design-mobile/releases',
  },
  {
    title: 'GitHub',
    path: 'https://github.com/ant-design/ant-design-mobile',
  },
]
const menus = {
  '/': [
    {
      title: '首页',
      path: 'index',
    },
  ],
  '/guide': [
    {
      title: '快速上手',
      path: '/guide/quick-start',
    },
    {
      title: 'FAQ',
      path: '/guide/faq',
    },
    {
      title: 'CSS 变量',
      path: '/guide/css-variables',
    },
    {
      title: '主题',
      path: '/guide/theme',
    },
    {
      title: '按需加载',
      path: '/guide/import-on-demand',
    },
    {
      title: '高清适配（试验性）',
      path: '/guide/hd',
    },
  ],
  '/components': [
    {
      title: '基础',
      children: ['/components/button', '/components/list', '/components/space'],
    },
    {
      title: '数据展示',
      children: [
        '/components/notice-bar',
        '/components/water-mark',
        '/components/steps',
        '/components/tag',
        '/components/infinite-scroll',
        '/components/popover',
        '/components/ellipsis',
        '/components/badge',
        '/components/image',
        '/components/image-viewer',
        '/components/card',
      ],
    },
    {
      title: '数据录入',
      children: [
        '/components/input',
        '/components/text-area',
        '/components/search',
        '/components/checkbox',
        '/components/radio',
        '/components/selector',
        '/components/switch',
        '/components/slider',
        '/components/picker',
        '/components/date-picker',
        '/components/form',
        '/components/rate',
      ],
    },
    {
      title: '反馈',
      children: [
        '/components/dialog',
        '/components/loading',
        '/components/empty',
        '/components/mask',
        '/components/toast',
        '/components/result',
        '/components/error-block',
        '/components/progress-bar',
        '/components/progress-circle',
        '/components/pull-to-refresh',
        '/components/action-sheet',
        '/components/collapse',
      ],
    },
    {
      title: '导航和布局',
      children: [
        '/components/tabs',
        '/components/tab-bar',
        '/components/grid',
        '/components/dropdown',
        '/components/popup',
        '/components/floating-panel',
        '/components/index-bar',
        '/components/divider',
      ],
    },
    {
      title: '试验性',
      children: [
        '/components/what-is-experimental',
        '/components/cascader',
        '/components/desense-text',
      ],
    },
  ],
}

function getComponentMenus(locale) {
  return componentMenus.map(item => ({
    title: item[locale === 'zh-CN' ? 'title.zh-CN' : 'title'],
    children: item.children,
  }))
}

export default {
  mode: 'site',
  title: 'Simple Design Mobile',
  logo: 'https://gw.alipayobjects.com/mdn/rms_2ddd4c/afts/img/A*XGPHS5H4-GkAAAAAAAAAAAAAARQnAQ',
  navs: navs,
  menus: menus,
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  alias: {
    'simple-mobile/lib/index.scss': process.cwd() + '/src/index.scss',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  styles: [
    `
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    `,
  ],
  // extraPostCSSPlugins: [
  //   pxToRem({
  //     rootValue: 50,
  //     propList: ['*'],
  //   }),
  // ],
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // [{ mode: 'vw', options: [100, 750] }],
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
}
