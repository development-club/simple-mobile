// const pxToRem = require('postcss-pxtorem')
const path = require('path')
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
        '/components/icons',
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
    {
      title: '数据类',
      children: [
        '/components/letter',
        '/components/steps',
        '/components/progress-circle',
        '/components/empty',
      ],
    },
    {
      title: '定制化组件',
      children: [],
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
  logo: 'https://lh3.googleusercontent.com/BuFFQycqqzr9RevdRF1YnGPAzF_iekK78gamCxXZZjPHvvnjEPfxX4-7lJlSGAC93nRq8q_4UOCaYRjzOAOvxEb1DCAXEJvzIrfJZ2t8VVaZqV8mKkfQFK8GnD5bK7-XstRK1qJat6s6DPtg22sXw2TZtlrAtDHMscOGdm6z6eqv85mU5g4haJfN_D7psSFuLMxJTG9YjHnIUoip3N9-6jW_WNCDMEVUKHX4-KBxtqImvmGbbNWnf5QUBLKw8prpyqPzecvl4oP8Nk09eWiv3WJqIBw7JApYrOkgck8oe6IgZ4VE0VrxAvHWI3Xf_kqGZKPml4_yiyATOXDTVkosqyGv9pRitZBsKq0f2Q0mEwNJaGelLQtGGlHdCwDEY1jgoHFUaDFsE9Og00_cMpiKMMyXZ7tFzjQPcGWlvKagSZCiSAFl3oWbLaFUFr6Pf44ndv1-kETKZlVS9Q6Q8gw4ewGPJtePcP9tmkHPhIvCBA-uttBcul5a7Ye_ZU6ngoj6s0PnEeylGBRntW99hlQ6DjvIyMflHrmdLVX-xuQ4nFllPKXSXpJ_-DlNZTrmdFTyuML-MR8gVbWoTFPEaI86TbmOZ_S1nA9BgNZTPscSyViy0D3pCHfcBvAT9ZQecJk67Yd4YcstxBPu5J16x_L3RZdC3C4UmDI7hOLnqPBacTOk3Fp8LN022d-60EfiMww6S_qBPQXCnzCNvmZknTUgXMA=w282-h272-no?authuser=0',
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
    ` #root .__dumi-default-mobile-demo-layout {
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
  chainWebpack: (config, { env, webpack, createCSSRule }) => {
    console.log(webpack.modules)
    config.module
      .rule('sprite-loader')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, '../src/components/icons/svgs')) // 只处理该目录下文件
      .end()
      .use('sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]',
      })
      .end()
  },
}
