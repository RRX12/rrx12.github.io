import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// 新增 Markdown 文件后，导航和首页文章目录会自动更新。
const notesDir = fileURLToPath(new URL('../notes/', import.meta.url))
const notes = readdirSync(notesDir).filter(f => f.endsWith('.md') && f !== 'index.md').sort().map(file => {
  const source = readFileSync(notesDir + file, 'utf8')
  return { text: source.match(/^#\s+(.+)$/m)?.[1] || file.replace(/\.md$/, ''), link: '/notes/' + file.replace(/\.md$/, '') }
})

export default defineConfig({
  lang: 'zh-CN',
  title: 'RRX12 · 技术笔记',
  description: '记录技术探索、实践与持续学习。',
  base: '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],
  sitemap: { hostname: 'https://rrx12.github.io' },
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'RRX12 / NOTES',
    nav: [{ text: '首页', link: '/' }, { text: '技术笔记', link: '/notes/' }],
    sidebar: [{ text: '知识档案', items: [{ text: '全部笔记', link: '/notes/' }, ...notes] }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/RRX12' }],
    search: { provider: 'local', options: { locales: { root: { translations: {
      button: { buttonText: '搜索笔记', buttonAriaLabel: '搜索笔记' },
      modal: { noResultsText: '未找到相关笔记', resetButtonTitle: '清空搜索', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } }
    } } } } },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'medium' } },
    darkModeSwitchLabel: '外观', lightModeSwitchTitle: '切换至浅色模式', darkModeSwitchTitle: '切换至深色模式',
    sidebarMenuLabel: '文档导航', returnToTopLabel: '返回顶部',
    footer: { message: '在探索中理解，在记录中成长。', copyright: '© RRX12 · 持续更新的技术笔记' }
  },
  // 目录由 Markdown 标题生成，无需手动维护链接。
  transformPageData(page) { if (page.relativePath === 'index.md' || page.relativePath === 'notes/index.md') page.frontmatter.notes = notes }
})
