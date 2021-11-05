import { useEffect, useState } from 'react'

import data from './destinations'
import * as styles from './Destination.module.css'

const Destination = () => {
  // Sets background class on page change
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('destinationBG')
    layout.classList.remove('crewBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('technologyBG')
  }, [])

  const [destination, setDestination] = useState(data.destinations[0])

  return (
    <div className={styles.Destination}>
      <h5 className={styles.Title}>
        <span>01</span>Pick your destination
      </h5>
      {/* TODO: Fix these images. Figure out how to dynamically render? */}
      <img
        className={styles.Image}
        src={destination.images.webp}
        alt={destination.name}
      />
      <ul className={styles.Navigation}>
        <li
          onClick={() => {
            setDestination(data.destinations[0])
          }}
        >
          Moon
        </li>
        <li
          onClick={() => {
            setDestination(data.destinations[1])
          }}
        >
          Mars
        </li>
        <li
          onClick={() => {
            setDestination(data.destinations[2])
          }}
        >
          Europa
        </li>
        <li
          onClick={() => {
            setDestination(data.destinations[3])
          }}
        >
          Titan
        </li>
      </ul>
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
      <div className={styles.LineBreak} />
      <div className={styles.Distance}>
        <span className={`sh2`}>Avg. Distance</span>
        <span className={`sh1`}>{destination.distance}</span>
      </div>
      <div className={styles.Travel}>
        <span className={`sh2`}>Est. Travel Time</span>
        <span className={`sh1`}>{destination.travel}</span>
      </div>
    </div>
  )
}

export default Destination
