import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import * as styles from './Home.module.css'

const Home = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('homeBG')
    layout.classList.remove('crewBG')
    layout.classList.remove('destinationBG')
    layout.classList.remove('technologyBG')
  }, [])

  return (
    <div className={styles.Home}>
      <div className={styles.Text}>
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.ExploreButton}>
        <Link to='/destination'>
          <h4>Explore</h4>
        </Link>
      </div>
    </div>
  )
}

export default Home
