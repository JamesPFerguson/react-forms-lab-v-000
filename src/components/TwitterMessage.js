import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super();

    this.state = {
      value: '',
      remainingCharacters: props.maxChars
    };
  }

  calculateRemainingChars = (e) => {
      this.setState({
<<<<<<< HEAD
        value: e.target.value,
        remainingCharacters: this.state.remainingCharacters - e.target.value.length
=======
        value: e.target.value
        remainingCharacters:   this.state.value.length
>>>>>>> d9622bffbf78d87b6ce1d0d183ad4ff24de1a64c
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <input type="text" value={this.state.value} onChange={this.calculateRemainingChars} />
        <p> Remaining Characters: {this.state.remainingCharacters} </p>
=======
        <input type="text" value={this.state.value} onKeydown={this.calculateRemainingChars} />
>>>>>>> d9622bffbf78d87b6ce1d0d183ad4ff24de1a64c
      </div>
    );
  }

}

export default TwitterMessage;
