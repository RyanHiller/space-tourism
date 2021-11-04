import { useEffect } from 'react'

import * as styles from './Technology.module.css'

const Technology = () => {
  useEffect(() => {
    const layout = document.getElementById('layout')
    layout.classList.add('technologyBG')
    layout.classList.remove('crewBG')
    layout.classList.remove('homeBG')
    layout.classList.remove('destinationBG')
  }, [])

  const technology = {}

  return (
    <div className={styles.Technology}>
      <h5>
        <span>03</span>Space launch 101
      </h5>
      {technology.image}
      <ol className={styles.Navigation}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
      <span className={`sh2`}>The terminology...</span>
      <h3 className={styles.Name}>{technology.name}Launch Vehicle</h3>
      <p className={styles.Description}>
        {technology.description}A launch vehicle or carrier rocket is a
        rocket-propelled vehicle used to carry a payload from Earth's surface to
        space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the
        most powerful in operation. Standing 150 metres tall, it's quite an
        awe-inspiring sight on the launch pad!
      </p>
    </div>
  )
}

export default Technology
