// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'
const Body = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar ? (
              <div className="left-navbar-container">
                <h1 className="heading">Left Navbar Menu</h1>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            ) : null}
            {showContent ? (
              <div className="content-container">
                <h1 className="heading">Content</h1>
                <p>
                  Lorem ipsum works is through the use of view models and
                  component models that each encapsulates content on either the
                  view level, or the component level. Components are the visual
                  buildings blocks of a Hub Framework-powered view, and are used
                  to render the content defined by a component model.
                </p>
              </div>
            ) : null}
            {showRightNavbar ? (
              <div className="left-navbar-container">
                <h1 className="heading">Right Navbar Menu</h1>
                <div className="box-container">
                  <p>Ad 1</p>
                </div>
                <div className="box-container">
                  <p>Ad 2</p>
                </div>
              </div>
            ) : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
