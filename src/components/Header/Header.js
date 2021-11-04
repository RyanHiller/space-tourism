import React from 'react'
import { Link } from 'react-router-dom'

import * as styles from './Header.module.css'

const Header = () => (
  <div className={styles.Header}>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/destination'>Destination</Link>
      <Link to='/crew'>Crew</Link>
      <Link to='/technology'>Technology</Link>
    </nav>
  </div>
)

export default Header
