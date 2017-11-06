import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

//import React from 'react';

//import './add-form.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(this.textInput.value);
        }
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                    <a href="#">Add a {this.props.type}...</a>
                </div>
            );
        }

        return (
            <form className="card add-form" onSubmit={this.onSubmit}>
                <input type="text" ref={input => this.textInput = input} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
