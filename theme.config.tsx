import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div>
      <img 
        width="30px" 
        style={{
          display: 'inline-block', 
          marginRight: '4px'
        }} 
        src="/images/favicon.ico" alt="logo" 
      />
      <span>费曼学习</span>
    </div>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  head: <link
      key="favicon"
      rel="icon"
      href="/images/favicon.ico"
      type="image/x-icon"
    />
  ,
  footer: {
    text: '用提问的方式来学习',
  },
  search: {
    placeholder: '在这里输入搜索内容'
  }
}

export default config
