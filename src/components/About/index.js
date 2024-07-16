import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBg = !isDarkTheme ? '' : 'aboutBg'
      const color = !isDarkTheme ? '' : 'color'
      return (
        <div className={`aboutContainer ${aboutBg}`}>
          <Navbar />
          <div className="lowerAboutContainer">
            {!isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            )}
            <h1 className={`heading ${color}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
