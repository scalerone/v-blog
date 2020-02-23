module.exports = {
    base: '/v-blog/',
    title: '小辉同学的技术博客',
    description: 'Vuepress blog demo',
    themeConfig: {
      // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/scalerone/blog',
      // 自定义仓库链接文字。
      repoLabel: 'My GitHub',
      nav: [
          { text: 'Home', link: '/' },
          { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
      ],
      sidebar: [
        ['/', '首页'],
        ['/blog/FirstBlog.md', '我的第一篇博客'],
        {
          title: 'HTML',
          collapsable: true,
          children: [
            ['page1/新增标签','新增标签']
         
          ]
        }
      ]
  }

  }