module.exports = {
    base: '/v-blog/',
    title: '辉月’s blog',
    description: 'keep going',
    themeConfig: {
      // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/scalerone/blog',
      // 自定义仓库链接文字。
      repoLabel: 'My GitHub',
      nav: [
          { text: '主页', link: '/' },
          { text: '前端精进', link: '/blog/FirstBlog.md' },
          { text: 'Vue3.0', link: '/vue3/' },
      ],
      sidebar: {
          '/vue3/': [
              '',
              '如何读源码',
              '实战',
              'CompositionAPI',
              '响应式实现对比',
              '虚拟Dom',
              'Fragment',
              'Teleport',
              'Suspense',
              'TypeScript支持',
              '自定义渲染器',
              '性能提升',
          ],

          // ['/', '首页'],
          // ['/blog/FirstBlog.md', '我的第一篇博客'],
          // {
          //   title: 'HTML',
          //   collapsable: true,
          //   children: [
          //     ['page1/新增标签','新增标签']
          //
          //   ]
          // },
      }


  }

  }
