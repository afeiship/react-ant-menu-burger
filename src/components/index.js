import noop from '@jswork/noop';
import React from 'react';
import PropTypes from 'prop-types';
import ReactToggle from '@jswork/react-toggle';

const CLASS_NAME = 'react-ant-menu-burger';

export default class ReactAntMenuBurger extends ReactToggle {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If onClick works.
     */
    disabled: PropTypes.bool,
    /**
     * Default value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The menu fold/unfold elements.
     */
    elements: PropTypes.array
  };

  static defaultProps = {
    value: false,
    disabled: false,
    onChange: noop,
    elements: []
  };

  get index() {
    const { value } = this.state;
    return +value;
  }

  render() {
    const { elements, ...props } = this.props;
    return (
      <span
        onClick={this.handleClick}
        children={elements[this.index]}
        {...props}
      />
    );
  }
}
