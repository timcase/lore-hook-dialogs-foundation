var React = require('react');
var ReactDOM = require('react-dom');

module.exports = {

  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },

  initRevealPlugin: function() {
    var node = ReactDOM.findDOMNode(this);
    $(node).foundation();
  },

  componentDidMount: function() {
    this.initRevealPlugin();
    this.show();
  },

  show: function() {
    var node = ReactDOM.findDOMNode(this);
    $(node).foundation('open');
  },

  close: function() {
    var node = ReactDOM.findDOMNode(this);
    $(node).foundation('close');
  },

  onSubmitClick: function() {
    this.close();
    this.props.onSubmit(this.state || {});
  },

  onCloseClick: function() {
    this.close();
  }

};
