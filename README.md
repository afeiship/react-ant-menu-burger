# react-ant-menu-burger
> A hamburger for menu expand/collapse.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-menu-burger
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| disabled  | bool   | false    | false   | If onClick works.                     |
| value     | bool   | false    | false   | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |
| elements  | array  | false    | []      | The menu fold/unfold elements.        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-menu-burger/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-menu-burger/dist/style.scss";

  // customize your styles:
  $react-ant-menu-burger-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntMenuBurger from '@jswork/react-ant-menu-burger';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-menu-burger/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-menu-burger/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-menu-burger
[version-url]: https://npmjs.org/package/@jswork/react-ant-menu-burger

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-menu-burger
[license-url]: https://github.com/afeiship/react-ant-menu-burger/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-menu-burger
[size-url]: https://github.com/afeiship/react-ant-menu-burger/blob/master/dist/react-ant-menu-burger.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-menu-burger
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-menu-burger
