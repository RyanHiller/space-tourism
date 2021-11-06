import { useEffect, useState } from 'react'

import data from './technologies'
import * as styles from './Technology.module.css'

const Technology = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('technologyBG')
    layout.classList.remove('crewBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('destinationBG')
  }, [])

  const [technology, setTechnology] = useState(data.technology[0])

  return (
    <div className={styles.Technology}>
      <h5>
        <span>03</span>Space launch 101
      </h5>
      <img
        className={styles.Image}
        src={technology.images.landscape}
        alt={technology.name}
      />
      <ul className={styles.Navigation}>
        <li>
          <div
            onClick={() => {
              setTechnology(data.technology[0])
            }}
          >
            1
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setTechnology(data.technology[1])
            }}
          >
            2
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setTechnology(data.technology[2])
            }}
          >
            3
          </div>
        </li>
      </ul>
      <div className={styles.Text}>
        <span className={`sh2`}>The terminology...</span>
        <h3 className={styles.Name}>{technology.name}</h3>
        <p className={styles.Description}>{technology.description}</p>
      </div>
    </div>
  )
}

export default Technology
