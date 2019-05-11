import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import "./App.css";


function Shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    guess: "",
    clicked: [],
  };


  ShuffleCards = () => {
    let shuffledCards = Shuffle(friends);
    this.State({ friends: shuffledCards});
  };

  Increment = () => {
    const score = this.state.currentScore + 1;
    this.setState({
      currentScore: score,
      guess: ""
    });
    if (score >= this.state.highScore) {
      this.setState({highScore: score});
    }
    else if (score === 12) {
      this.setState ({guess: "WINNER!"});
    }
    this.ShuffleCards();
  };

  Click = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.Increment();
      this.setState({ clicked: this.state.clicked.concat(id) })
    } else {
      // make a reset function??
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.currentScore}
          highScore={this.state.highScore}
          guess={this.state.guess}
        />

        <Title>Click a Pik...Just Not Twice!</Title>

        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            Increment={this.Increment}
            ShuffleCards={this.ShuffleCards}
            Click={this.Click}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
