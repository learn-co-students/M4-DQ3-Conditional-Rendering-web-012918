import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: ""
    }
  }

  handleClick = (event) => {
    this.setState({
      clicked: event.target.id
    })
    event.target.className === "item" ? event.target.className = "item active" : event.target.className = "item"
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay;
    switch(this.state.clicked) {
      case "profile":
        detailsToDisplay = <Profile/>
        break;
      case "photo":
        detailsToDisplay = <Photos/>
        break;
      case "cocktail":
        detailsToDisplay = <Cocktails/>
        break;
      case "pokemon":
        detailsToDisplay = <Pokemon/>
        break;
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
