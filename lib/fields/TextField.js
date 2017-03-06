'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'TextField',

  propTypes: {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: ''
    };
  },

  onChange: function onChange(e) {
    var value = e.target.value;

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
        React.createElement('textarea', {
          type: 'text',
          rows: '3',
          value: this.props.value,
          placeholder: attribute.placeholder,
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