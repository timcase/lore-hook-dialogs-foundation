'use strict';

var React = require('react');
var DialogMixin = require('../mixins/DialogMixin');
var StringField = require('../fields/StringField');
var TextField = require('../fields/TextField');
var BooleanField = require('../fields/BooleanField');
var NumberField = require('../fields/NumberField');
var _ = require('lodash');

module.exports = function (options) {
  options = options || {};

  var title = options.title;
  var cancelButtonText = options.cancelButtonText;
  var submitButtonText = options.submitButtonText;
  var attributes = options.attributes;
  var defaults = options.defaults;
  var attributeNames = _.keys(attributes);

  return React.createClass({
    displayName: 'Dialog',

    mixins: [DialogMixin],

    getInitialState: function getInitialState() {
      var that = this;

      // Create change callbacks
      this.onChangeCallbacks = _.reduce(attributeNames, function (callbacks, attributeName) {
        callbacks[attributeName] = function (event) {
          var newState = {};
          newState[attributeName] = event.target.value;
          that.setState(newState);
        };
        return callbacks;
      }, {});

      // Create initial state
      return _.reduce(attributeNames, function (initialState, attributeName) {
        initialState[attributeName] = defaults[attributeName] || attributes[attributeName].defaultValue;
        return initialState;
      }, {});
    },

    render: function render() {
      var formFields = _.map(attributeNames, function (attributeName) {
        var attribute = attributes[attributeName];
        if (attribute.type === 'string') {
          return React.createElement(StringField, {
            key: attributeName,
            attribute: attribute,
            label: attributeName,
            value: this.state[attributeName],
            onChange: this.onChangeCallbacks[attributeName] });
        } else if (attribute.type === 'text') {
          return React.createElement(TextField, {
            key: attributeName,
            attribute: attribute,
            label: attributeName,
            value: this.state[attributeName],
            onChange: this.onChangeCallbacks[attributeName] });
        } else if (attribute.type === 'boolean') {
          return React.createElement(BooleanField, {
            key: attributeName,
            attribute: attribute,
            label: attributeName,
            value: this.state[attributeName],
            onChange: this.onChangeCallbacks[attributeName] });
        } else if (attribute.type === 'number') {
          return React.createElement(NumberField, {
            key: attributeName,
            attribute: attribute,
            label: attributeName,
            value: this.state[attributeName],
            onChange: this.onChangeCallbacks[attributeName] });
        } else {
          throw new Error('Unrecognized attribute type: ' + attribute.type);
        }
      }.bind(this));

      return React.createElement(
        'div',
        { className: 'reveal', 'data-reveal': true },
        React.createElement(
          'button',
          { onClick: this.onCloseClick, className: 'close-button', 'aria-label': 'Close modal', type: 'button' },
          React.createElement(
            'span',
            { 'aria-hidden': 'true' },
            '\xD7'
          )
        ),
        React.createElement(
          'h4',
          null,
          title
        ),
        React.createElement(
          'form',
          null,
          formFields,
          React.createElement(
            'div',
            { className: 'row float-right' },
            React.createElement(
              'div',
              { className: 'row float-right' },
              React.createElement(
                'div',
                { className: 'large-6 columns' },
                React.createElement(
                  'button',
                  { onClick: this.onCloseClick, className: 'button secondary' },
                  cancelButtonText
                )
              ),
              React.createElement(
                'div',
                { className: 'large-6 columns' },
                React.createElement(
                  'button',
                  { onClick: this.onSubmitClick, className: 'button primary' },
                  submitButtonText
                )
              )
            )
          )
        )
      );
    }
  });
};