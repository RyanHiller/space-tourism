import { useEffect } from 'react'

import img from '../../assets/destination/image-moon.webp'

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

  const destination = {}

  return (
    <div className={styles.Destination}>
      <h5 className={styles.Title}>
        <span>01</span>Pick your destination
      </h5>
      {/* <img
        className={styles.Image}
        src={destination.image}
        alt={destination.name}
      /> */}
      <img className={styles.Image} src={img} alt={destination.name} />
      <ul className={styles.Navigation}>
        <li>Moon</li>
        <li>Mars</li>
        <li>Europa</li>
        <li>Titan</li>
      </ul>
      <h2>{destination.name}Moon</h2>
      <p>
        {destination.description}See our planet as you’ve never seen it before.
        A perfect relaxing trip away to help regain perspective and come back
        refreshed. While you’re there, take in some history by visiting the Luna
        2 and Apollo 11 landing sites.
      </p>
      <div className={styles.LineBreak} />
      <div className={styles.Distance}>
        <span className={`sh2`}>Avg. Distance</span>
        <span className={`sh1`}>{destination.distance}384,400 KM</span>
      </div>
      <div className={styles.Travel}>
        <span className={`sh2`}>Est. Travel Time</span>
        <span className={`sh1`}>{destination.time}3 Days</span>
      </div>
    </div>
  )
}

export default Destination
