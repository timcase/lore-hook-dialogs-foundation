var React = require('react');
var DialogMixin = require('../mixins/DialogMixin');
var StringField = require('../fields/StringField');
var TextField = require('../fields/TextField');
var BooleanField = require('../fields/BooleanField');
var NumberField = require('../fields/NumberField');
var _ = require('lodash');

module.exports = function(options) {
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

    getInitialState: function() {
      var that = this;

      // Create change callbacks
      this.onChangeCallbacks = _.reduce(attributeNames, function(callbacks, attributeName) {
        callbacks[attributeName] = function(event) {
          var newState = {};
          newState[attributeName] = event.target.value;
          that.setState(newState);
        };
        return callbacks;
      }, {});

      // Create initial state
      return _.reduce(attributeNames, function(initialState, attributeName) {
        initialState[attributeName] = defaults[attributeName] || attributes[attributeName].defaultValue;
        return initialState;
      }, {});
    },

    render: function () {
      var formFields = _.map(attributeNames, function(attributeName) {
        var attribute = attributes[attributeName];
        if (attribute.type === 'string') {
          return (
            <StringField
              key={attributeName}
              attribute={attribute}
              label={attributeName}
              value={this.state[attributeName]}
              onChange={this.onChangeCallbacks[attributeName]} />
          );
        } else if (attribute.type === 'text') {
          return (
            <TextField
              key={attributeName}
              attribute={attribute}
              label={attributeName}
              value={this.state[attributeName]}
              onChange={this.onChangeCallbacks[attributeName]} />
          );
        } else if (attribute.type === 'boolean') {
          return (
            <BooleanField
              key={attributeName}
              attribute={attribute}
              label={attributeName}
              value={this.state[attributeName]}
              onChange={this.onChangeCallbacks[attributeName]} />
          );
        } else if (attribute.type === 'number') {
          return (
            <NumberField
              key={attributeName}
              attribute={attribute}
              label={attributeName}
              value={this.state[attributeName]}
              onChange={this.onChangeCallbacks[attributeName]} />
          );
        } else {
          throw new Error('Unrecognized attribute type: ' + attribute.type);
        }
      }.bind(this));

      return (
          <div className="reveal" data-reveal>
              <button onClick={this.onCloseClick} className="close-button" aria-label="Close modal" type="button">
                  <span aria-hidden="true">&times;</span>
              </button>
              <h4>{title}</h4>
              <form>
                {formFields}
                <div className="row float-right">
                  <div className="row float-right">
                    <div className="large-6 columns">
                      <button onClick={this.onCloseClick} className="button secondary">
                        {cancelButtonText}
                      </button>
                    </div>
                    <div className="large-6 columns">
                      <button onClick={this.onSubmitClick} className="button primary">
                        {submitButtonText}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
          </div>
      );
    }
  });
};
