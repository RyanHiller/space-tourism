import { useEffect, useState } from 'react'

import data from './crewmates'
import * as styles from './Crew.module.css'

const Crew = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('crewBG')
    layout.classList.remove('destinationBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('technologyBG')
  }, [])

  const [crewmate, setCrewmate] = useState(data.crew[0])

  return (
    <div className={styles.Crew}>
      <h5 className={styles.Title}>
        <span>02</span>Meet your crew
      </h5>
      <img
        className={styles.Image}
        src={crewmate.images.webp}
        alt={crewmate.name}
      />
      <div className={`${styles.LineBreak} lineBreak`} />
      <ul className={styles.Navigation}>
        <li>
          <div
            onClick={() => {
              setCrewmate(data.crew[0])
            }}
          ></div>
        </li>
        <li>
          <div
            onClick={() => {
              setCrewmate(data.crew[1])
            }}
          ></div>
        </li>
        <li>
          <div
            onClick={() => {
              setCrewmate(data.crew[2])
            }}
          ></div>
        </li>
        <li>
          <div
            onClick={() => {
              setCrewmate(data.crew[3])
            }}
          ></div>
        </li>
      </ul>
      <div className={styles.Nameplate}>
        <h4 className={styles.Role}>{crewmate.role}</h4>
        <h3 className={styles.Name}>{crewmate.name}</h3>
      </div>
      <p className={styles.Bio}>{crewmate.bio}</p>
    </div>
  )
}

export default Crew
