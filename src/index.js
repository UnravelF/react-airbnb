import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// 引入路由包
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import 'normalize.css'
import './assets/css/index.less'
import store from './store'
import theme from './assets/theme'

// @ => src
// 问题：react脚手架隐藏webpack
// 解决：craco => create-react-app-config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback="loading">
      {/* redux */}
      <Provider store={store}>
        {/* 主题 */}
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  // </React.StrictMode>
);

