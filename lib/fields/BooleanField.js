'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'BooleanField',

  propTypes: {
    attribute: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: false
    };
  },

  getStyles: function getStyles() {
    return {
      description: {
        marginTop: '-5px',
        marginBottom: '3px',
        color: '#777'
      }
    };
  },

  onChange: function onChange(e) {
    var value = e.target.checked;

    this.props.onChange({
      target: {
        label: this.props.label,
        value: value
      }
    });
  },

  render: function render() {
    var attribute = this.props.attribute;
    var styles = this.getStyles();

    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'legend',
        null,
        attribute.displayName || this.props.label
      ),
      React.createElement('input', { type: 'checkbox', checked: this.props.value, onChange: this.onChange }),
      React.createElement(
        'p',
        { className: 'help-text' },
        attribute.description
      )
    );
  }

});