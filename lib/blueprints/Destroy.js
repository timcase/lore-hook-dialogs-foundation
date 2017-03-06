'use strict';

var React = require('react');
var DialogMixin = require('../mixins/DialogMixin');

module.exports = function (options) {
  options = options || {};

  var title = options.title;
  var cancelButtonText = options.cancelButtonText;
  var submitButtonText = options.submitButtonText;

  return React.createClass({
    displayName: 'Dialog',

    mixins: [DialogMixin],

    propTypes: {
      model: React.PropTypes.object.isRequired
    },

    render: function render() {

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
          React.createElement(
            'p',
            null,
            'Are you sure you want to delete this?'
          ),
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