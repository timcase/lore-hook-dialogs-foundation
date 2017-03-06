'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'NumberField',

  propTypes: {
    attribute: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: 0
    };
  },

  onChange: function onChange(e) {
    var value = Number(e.target.value);

    this.props.onChange({
      target: {
        label: this.props.label,
        value: value
      }
    });
  },

  render: function render() {
    var attribute = this.props.attribute;

    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'label',
        null,
        attribute.displayName || this.props.label,
        React.createElement('input', {
          type: 'number',
          value: this.props.value,
          onChange: this.onChange })
      ),
      React.createElement(
        'p',
        { className: 'help-text' },
        attribute.description
      )
    );
  }
});