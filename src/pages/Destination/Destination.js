import { useEffect } from 'react'

import * as styles from './Destination.module.css'

const Destination = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('crewBG')
    layout.classList.remove('destinationBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('technologyBG')
  }, [])

  return (
    <div className={styles.Destination}>
      <div>a</div>
    </div>
  )
}

export default Destination
