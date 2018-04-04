import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      currentItem: ''
    }
  }

  onClicked = (event) => {
    if(event.target.parentNode.className === "ui four item menu"){
      let nodes = event.target.parentNode.children
      for(let i = 0; i < nodes.length; i++){
        nodes[i].className = 'item'
      }
    } else if(event.target.parentNode.className.includes('item')){
      let nodes = event.target.parentNode.parentNode.children
      for(let i = 0; i < nodes.length; i++){
        nodes[i].className = 'item'
      }
    }

    this.setState({
      currentItem: event.target
    }, () =>{
      if(this.state.currentItem.className === 'item'){
        let otherItem = this.state.currentItem
        otherItem.className = 'item active'
        this.setState({currentItem: otherItem})
      } else if(this.state.currentItem.className.includes('icon')){
        let otherItem = this.state.currentItem
        otherItem.className = 'item active'
        this.setState({currentItem: otherItem})
      }
    })
  }

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    let toDisplay = Profile()
    let thisId = this.state.currentItem.id
    if (thisId === 'photo'){
      toDisplay = Photos()
    } else if (thisId === 'profile'){
      toDisplay = Profile()
    } else if (thisId === 'cocktail'){
      toDisplay = Cocktails()
    } else if (thisId === 'pokemon'){
      toDisplay = <Pokemon />
    }

    const detailsToDisplay = <div>{toDisplay}</div>

    return (
      <div>
        <MenuBar onClicked={this.onClicked}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
