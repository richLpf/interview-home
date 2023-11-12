import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>费曼学习</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '用提问的方式来学习',
  },
  search: {
    placeholder: '在这里输入搜索内容'
  }
}

export default config
