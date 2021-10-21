// const pxToRem = require('postcss-pxtorem')

const navs = [
  {
    title: '指南',
    path: '/guide/quick-start',
  },
  {
    title: '组件',
    path: '/components',
  },
  {
    title: '发布日志',
    path: 'https://github.com/development-club/simple-mobile/releases',
  },
  {
    title: 'GitHub',
    path: 'https://github.com/development-club/simple-mobile',
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
  ],
  '/components': [
    {
      title: '基础',
      meta: {},
      children: [
        '/components/button',
        '/components/icon',
        '/components/space',
        '/components/image',
      ],
    },
    {
      title: '弹窗 & 提示',
      children: [
        '/components/mask',
        '/components/dialog',
        '/components/popup',
        '/components/toast',
        '/components/loading',
      ],
    },
  ],
}

// function getComponentMenus(locale) {
//   return componentMenus.map(item => ({
//     title: item[locale === 'zh-CN' ? 'title.zh-CN' : 'title'],
//     children: item.children,
//   }))
// }
const mfsu =
  process.env.NODE_ENV === 'production'
    ? { production: { output: '.mfsu-production' } }
    : {} // 开启基于webpack5的新特性的打包方案

export default {
  mode: 'site',
  title: 'Simple Design Mobile',
  logo: 'https://gw.alipayobjects.com/mdn/rms_2ddd4c/afts/img/A*XGPHS5H4-GkAAAAAAAAAAAAAARQnAQ',
  navs: navs,
  menus: menus,
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: false,
  },
  alias: {
    'simple-mobile/lib/index.scss': process.cwd() + '/src/index.scss',
    'demos': process.cwd() + '/src/demos/index.ts',
    'utils': process.cwd() + '/src/utils/index.ts',
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
    carrier: '', // 设备状态栏左侧的文本内容
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
  mfsu: mfsu,
}
