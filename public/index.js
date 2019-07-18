import ReactAntMenuBurger from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  _onChange = (e) => {
    const value = e.target.value;
    console.log('new value:->', value);
  };
  render() {
    return (
      <div className="app-container">
        <ReactAntMenuBurger onChange={this._onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
