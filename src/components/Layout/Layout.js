import React from 'react'

import Header from '../Header/Header'

import './backgroundStyles.css'
import * as styles from './Layout.module.css'

const Layout = ({ children }) => (
  <div className={styles.Layout} id='layout'>
    <div>
      <Header />
      {/* Drawer */}
      {/* Backdrop */}
    </div>
    <main>{children}</main>
  </div>
)

export default Layout
