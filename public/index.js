import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntMenuBurger from '../src/main';
import ReactAdminIcons from '@jswork/react-admin-icons';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-menu-burger">
        <ReactAntMenuBurger
          elements={[
            <ReactAdminIcons value="shrink-right" />,
            <ReactAdminIcons value="spread-left" />
          ]}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
