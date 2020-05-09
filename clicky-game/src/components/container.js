import React, {Component} from 'react';
import "./container.css"
import Pics from '../assets/images.json'
import Card from './Card.js'

class Container extends Component {
  state = {
    clickedArr: [],
    winsTracker: 0,
    lossTracker: 0
  }

  imageClick = (id) => {
    let newClick = this.state.clickedArr;
    
    this.setState({
      clickedArr: [
        ...newClick,
        id
      ]
    })
  }

  componentDidUpdate() {
    let newClick = this.state.clickedArr;
    console.log(newClick)
    let findDuplicate = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
    let duplicates = findDuplicate(newClick);

    if (duplicates[0]) {
      let newLoses = this.state.lossTracker + 1;
      alert(`You Lost! You clicked ${newClick.length - 1} unique photos. Try again!`)
      this.setState({clickedArr: [], lossTracker: newLoses});
    } else if (newClick.length === 12) {
      let newWin = this.state.winsTracker + 1;
      alert(`You Won! Your memory is bananas.`)
      this.setState({clickedArr: [], winsTracker: newWin});
    }
  }

  render() {
    function shuffle(arr) {
      let currentIndex = arr.length,
        tempValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
      }
      return (arr)
    }

    let newImgArr = shuffle(Pics);

    return (
      <div className="container-fluid card-deck">
        {/* <Scoreboard wins={this.state.winsTracker} losses={this.state.lossTracker}/> */}
        <div>
          <h3 className="col-sm">
            Wins: {this.state.winsTracker}
            | Losses: {this.state.lossTracker}
          </h3>
        </div>
        <div className="row card">
          <Card id={newImgArr[0].id} image={newImgArr[0].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[1].id} image={newImgArr[1].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[2].id} image={newImgArr[2].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[3].id} image={newImgArr[3].image} imageClick = {this.imageClick} />
        </div>
        <div className="row card">
          <Card id={newImgArr[4].id} image={newImgArr[4].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[5].id} image={newImgArr[5].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[6].id} image={newImgArr[6].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[7].id} image={newImgArr[7].image} imageClick = {this.imageClick} />
        </div>
        <div className="row card">
          <Card id={newImgArr[8].id} image={newImgArr[8].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[9].id} image={newImgArr[9].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[10].id} image={newImgArr[10].image} imageClick = {this.imageClick} />
          <Card id={newImgArr[11].id} image={newImgArr[11].image} imageClick = {this.imageClick} />
        </div>
      </div>
    )
  }
};

export default Container;