import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Riddle extends Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  };

  state = {
    currentAnswer: ''
  };

  handleChange = ({ target }) => {
    this.setState({ currentAnswer: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.currentAnswer === this.props.answer) console.log('Correct!');
  };

  render() {
    const { question } = this.props;

    return (
      <div>
        <h4>SOLVE THE RIDDLE</h4>
        <p>{question}</p>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input/>
          <button>Solve</button>
        </form>
      </div>
    );
  }
}











{/* <div>
            <h4>SOLVE THE RIDDLE</h4>
            <p>{question}</p>
            <form>
              <input/>
              <button>Solve</button>
            </form>
          </div> */}