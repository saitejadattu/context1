// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'
const ConfigurationController = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value
        const onChangeContent = event => {
          onToggleShowContent(event.target.value)
        }
        const onChangeLeftNavbar = event => {
          onToggleShowLeftNavbar(event.target.value)
        }
        const onChangeRightNavbar = event => {
          onToggleShowRightNavbar(event.target.value)
        }
        return (
          <div className="configuration-controller-container">
            <h1>Layout</h1>
            <div className="content-input-container">
              <input
                type="checkbox"
                className="content-input"
                onChange={onChangeContent}
                checked={showContent}
                id="contentId"
              />
              <label htmlFor="contentId">Content</label>
            </div>
            <div className="left-input-container">
              <input
                type="checkbox"
                className="left-input"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
                id="leftId"
              />
              <label htmlFor="leftId">Left Navbar</label>
            </div>
            <div className="right-input-container">
              <input
                type="checkbox"
                className="right-input"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
                id="rightId"
              />
              <label htmlFor="rightId">Right Navbar</label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default ConfigurationController
