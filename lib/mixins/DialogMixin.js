'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = {

  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },

  initRevealPlugin: function initRevealPlugin() {
    var node = ReactDOM.findDOMNode(this);
    $(node).foundation();
  },

  componentDidMount: function componentDidMount() {
    this.initRevealPlugin();
    this.show();
  },

  show: function show() {
    var node = ReactDOM.findDOMNode(this);
    $(node).foundation('open');
  },

  close: function close() {
    var node = ReactDOM.findDOMNode(this);
    $(node).foundation('close');
  },

  onSubmitClick: function onSubmitClick() {
    this.close();
    this.props.onSubmit(this.state || {});
  },

  onCloseClick: function onCloseClick() {
    this.close();
  }

};