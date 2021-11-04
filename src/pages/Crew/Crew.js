import { useEffect } from 'react'

import * as styles from './Crew.module.css'

const Crew = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('crewBG')
    layout.classList.remove('destinationBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('technologyBG')
  }, [])

  const crewmate = {}

  return (
    <div className={styles.Crew}>
      <h5>
        <span>02</span>Meet your crew
      </h5>
      {crewmate.image}
      <div className={styles.LineBreak} />
      <ul>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
      </ul>
      <div className={styles.Nameplate}>
        <h4>{crewmate.position}COMMANDER</h4>
        <h3>{crewmate.name}DOUGLAS HURLEY</h3>
      </div>
      <p>
        {crewmate.bio}Douglas Gerald Hurley is an American engineer, former
        Marine Corps pilot and former NASA astronaut. He launched into space for
        the third time as commander of Crew Dragon Demo-2.
      </p>
    </div>
  )
}

export default Crew
