import { useEffect } from 'react'

import * as styles from './Crew.module.css'

const Crew = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('destinationBG')
    layout.classList.remove('crewBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('technologyBG')
  }, [])

  return <div className={styles.Crew}></div>
}

export default Crew
