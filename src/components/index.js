import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Icon } from 'antd';

const CLASS_NAME = 'react-ant-menu-burger';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: false,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value };
  }

  componentWillUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.change(value);
    }
  }

  change(inValue, inCallback) {
    const callback = inCallback || noop;
    const target = { value: inValue };
    const { onChange } = this.props;
    this.setState(target, () => {
      onChange({ target });
      callback();
    });
  }

  _onClick = (e) => {
    this.change(!this.state.value);
  };

  render() {
    const { className, value, ...props } = this.props;
    return (
      <a
        onClick={this._onClick}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <Icon type={this.state.value ? 'menu-unfold' : 'menu-fold'} />
      </a>
    );
  }
}
