import { useEffect } from 'react'

import logo from '../../assets/destination/image-moon.webp'

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
      <h5>
        <span>01</span>Pick your destination
      </h5>
      {destination.image}
      <img src={logo} alt={destination.name} />
      <ul>
        <li>Moon</li>
        <li>Mars</li>
        <li>Europa</li>
        <li>Titan</li>
      </ul>
      <h3>{destination.name}ABC</h3>
      <p>
        {destination.description}Lorem Ipsum jsldkfjlskdjflskdjflsk djlfskdj
        lfksd ljfks ldjfsldk jflskd lskf jsdlk fjlskd flskd jflskd jlfsk djlfks
        djlkf jsldk
      </p>
      <div className={styles.LineBreak} />
      <div className={styles.Distance}>
        <span className={`sh2`}>Avg. Distance</span>
        <span className={`sh1`}>{destination.distance}384400KM</span>
      </div>
      <div className={styles.Travel}>
        <span className={`sh2`}>Est. Travel Time</span>
        <span className={`sh1`}>{destination.time}3 Days</span>
      </div>
    </div>
  )
}

export default Destination
