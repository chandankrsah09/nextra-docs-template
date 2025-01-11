import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img style={{ width: "80px"}} src="https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png?v=1957220810437665024" alt="logo" />
    </>
  ),
  project: {
    link: 'https://github.com',
  },
  chat: {
    link: 'https://www.youtube.com/channel/UCal5EaAQTzvXQk3LXk2FUWw',
    icon: (
      <>
        <img style={{ width: "35px"}} src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="logo" />
      </>
    )
  },
  docsRepositoryBase: 'https://github.com',
  footer: {
    text: 'MS Docs Template',
  },
}

export default config
