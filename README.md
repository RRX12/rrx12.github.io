# RRX12 的技术笔记

中文个人技术文档站，基于 VitePress。正文由作者维护；Agent 测评仅预留空白文章。

## 写作

编辑 `docs/notes/agent-evaluation.md`，在 HTML 注释下方填入正文，完成后删除“待更新”提示。

新增文章：在 `docs/notes/` 新建 `.md` 文件，写一个 `# 文章标题`。首页、文章列表、左侧导航和搜索会在下次构建时自动收录。二级、三级标题自动生成本页目录。图片放在 `docs/public/images/`，用 `![说明](/images/文件名.png)` 引用。

## 本地运行

安装 Node.js 22，并运行 `corepack enable` 启用 pnpm。然后：

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
```

构建检查：`pnpm docs:build`；预览构建结果：`pnpm docs:preview`。

## 首次发布到 GitHub Pages

1. 在 **RRX12** 账号创建公开仓库 **rrx12.github.io**，默认分支设为 `main`。
2. 将本目录中的网站文件放到仓库根目录。确保包含隐藏目录 `.github/` 和 `docs/.vitepress/`；不要上传 `node_modules/`。
3. 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
4. 向 `main` 推送，或在 Actions 页面手动运行 **Deploy documentation to GitHub Pages**。
5. 等待工作流成功后，从 Pages 设置查看正式地址。预期地址为 https://rrx12.github.io/ ，只有部署成功后该地址才可访问。

后续直接在 GitHub 编辑 Markdown 并提交到 main，就会自动更新网站。

如果使用其他仓库名部署到子路径，需要同步修改 `docs/.vitepress/config.mts` 中的 `base`、favicon 的 href 和 sitemap hostname。当前配置专用于 `rrx12.github.io` 根站点。

## 个性化

- 网站名称、GitHub 链接：`docs/.vitepress/config.mts`
- 首页文案与版式：`docs/.vitepress/theme/NotesHome.vue`
- 颜色与字体：`docs/.vitepress/theme/style.css`

部署参考：[GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)、[VitePress 部署指南](https://vitepress.dev/guide/deploy)。
