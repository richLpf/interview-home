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
      <span>博客大全</span>
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
    text: (
      <div style={{ textAlign: 'center' }}>
        <div>
          © 2024 博客大全 | <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">豫ICP备2021029374号-1</a>
        </div>
      </div>
    )
  },
  search: {
    placeholder: '在这里输入搜索内容'
  }
}

export default config
