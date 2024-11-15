import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import builtins from 'builtin-modules'
import { defineBuildConfig } from 'unbuild'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineBuildConfig({
  alias: {
    '@nolebase/vitepress-plugin-enhanced-readabilities': resolve(__dirname, '../packages/vitepress-plugin-enhanced-readabilities/src/'),
    '@nolebase/vitepress-plugin-highlight-targeted-heading': resolve(__dirname, '../packages/vitepress-plugin-highlight-targeted-heading/src/'),
    '@nolebase/vitepress-plugin-index': resolve(__dirname, '../packages/vitepress-plugin-index/src'),
    '@nolebase/vitepress-plugin-inline-link-preview': resolve(__dirname, '../packages/vitepress-plugin-inline-link-preview/src/'),
    '@nolebase/vitepress-plugin-git-changelog': resolve(__dirname, '../packages/vitepress-plugin-git-changelog/src/'),
    '@nolebase/vitepress-plugin-graph-view': resolve(__dirname, '../packages/vitepress-plugin-graph-view/src/'),
    '@nolebase/vitepress-plugin-page-properties': resolve(__dirname, '../packages/vitepress-plugin-page-properties/src/'),
    '@nolebase/vitepress-plugin-sidebar': resolve(__dirname, '../packages/vitepress-plugin-sidebar/src/'),
    '@nolebase/vitepress-plugin-thumbnail-hash': resolve(__dirname, '../packages/vitepress-plugin-thumbnail-hash/src'),
  },
  entries: [
    'src/plugins/index.ts',
    'src/index.ts',
  ],
  clean: true,
  sourcemap: true,
  declaration: true,
  externals: [
    'vue',
    'vitepress',
    // builtins
    ...builtins,
  ],
  rollup: {
    emitCJS: true,
  },
})
