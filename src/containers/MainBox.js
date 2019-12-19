import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      details: <Profile />
    }
  }

  clickHandler = (event) => {
    event.stopPropagation()
    // debugger
    let buttons = event.target.parentNode.children
    for (let i=0; i<buttons.length; i++ ){
      buttons[i].className = "item"
    }
    event.target.className = "item active"
    switch(event.target.children[0].id){
      case "profile":
        this.setState({ details: <Profile /> })
        break;
      case "photo":
        this.setState({ details: <Photos /> })
        break;
      case "cocktail":
        this.setState({ details: <Cocktails /> })
        break;
      case "pokemon":
        this.setState({ details: <Pokemon /> })
        break;
    }
  }

  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */


    const detailsToDisplay = this.state.details

    return (
      <div>
        <MenuBar onClick={this.clickHandler} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
