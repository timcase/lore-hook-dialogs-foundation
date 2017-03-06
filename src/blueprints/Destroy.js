var React = require('react');
var DialogMixin = require('../mixins/DialogMixin');

module.exports = function(options) {
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

    render: function () {

      return (
          <div className="reveal" data-reveal>
              <button onClick={this.onCloseClick} className="close-button" aria-label="Close modal" type="button">
                  <span aria-hidden="true">&times;</span>
              </button>
              <h4>{title}</h4>
              <form>
                <p>Are you sure you want to delete this?</p>
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
