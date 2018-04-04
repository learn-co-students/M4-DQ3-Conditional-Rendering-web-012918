import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      tab: "profile"
    }
  }

  onSelectTab = (e) => {
    e.preventDefault()
    let tag = e.target
    e.target.tagName === "I" ? tag = e.target.parentNode : null
    document.getElementsByClassName("item active")[0].className = "item"
    tag.className = "item active"
    this.setState({
      tab: tag.id
    })
  }

  switchPage = () => {
    switch (this.state.tab) {
      case "profile":
        return <Profile />
        break
      case "photo":
        return <Photos />
        break
      case "cocktail":
        return <Cocktails />
        break
      case "pokemon":
        return <Pokemon />
        break
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar onSelectTab={ this.onSelectTab }/>
        { this.switchPage() }
      </div>
    )
  }
}

export default MainBox
