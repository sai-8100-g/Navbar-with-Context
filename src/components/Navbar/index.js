import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }

      const navBg = !isDarkTheme ? '' : 'navBg'
      const color = !isDarkTheme ? '' : 'color'
      return (
        <nav className={navBg}>
          {!isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="websiteLogo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="websiteLogo"
            />
          )}
          <ul className="navUl">
            <li className="firstLi">
              <Link className={`navLink ${color}`} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`navLink ${color}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!isDarkTheme ? (
            <button data-testid="theme" type="button" onClick={changeTheme}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="themeLogo"
              />
            </button>
          ) : (
            <button data-testid="theme" type="button" onClick={changeTheme}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="themeLogo"
              />
            </button>
          )}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
