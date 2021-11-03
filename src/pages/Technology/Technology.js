import { useEffect } from 'react'

import * as styles from './Technology.module.css'

const Technology = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('technologyBG')
    layout.classList.remove('crewBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('destinationBG')
  }, [])

  return <div className={styles.Technology}></div>
}

export default Technology
