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
        {crewmate.bio}Lorem Ipsum jsldkfjlskdjflskdjflsk djlfskdj lfksd ljfks
        ldjfsldk jflskd lskf jsdlk fjlskd flskd jflskd jlfsk djlfks djlkf jsldk
      </p>
    </div>
  )
}

export default Crew
