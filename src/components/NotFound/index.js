import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notBg = !isDarkTheme ? '' : 'notBg'
      const color = !isDarkTheme ? '' : 'color'
      return (
        <div className={`notfoundContainer ${notBg}`}>
          <Navbar />
          <div className="lowerNotFoundContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />
            <h1 className={`heading ${color}`}>Lost Your Way?</h1>
            <p className={`para ${color}`}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
