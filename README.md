# react-ant-menu-burger
> A hamburger for menu expand/collapse.

## install
```shell
npm install -S afeiship/react-ant-menu-burger
```

## usage
1. import css
  ```scss
  @import "~react-ant-menu-burger/style.scss";

  // customize your styles:
  $react-ant-menu-burger-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntMenuBurger from 'react-ant-menu-burger';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactAntMenuBurger />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-menu-burger/
