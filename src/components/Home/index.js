import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const color = !isDarkTheme ? '' : 'color'
      const homeBg = !isDarkTheme ? '' : 'homeBg'
      return (
        <div className={`homeContainer ${homeBg}`}>
          <Navbar />
          <div className="lowerHomeContainer">
            {!isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            )}
            <h1 className={`heading ${color}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
