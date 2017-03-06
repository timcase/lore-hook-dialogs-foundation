var React = require('react');

module.exports = React.createClass({
  displayName: 'BooleanField',

  propTypes: {
    attribute: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      value: false
    }
  },

  getStyles: function() {
    return {
      description: {
        marginTop: '-5px',
        marginBottom: '3px',
        color: '#777'
      }
    }
  },

  onChange: function(e){
    var value = e.target.checked;

    this.props.onChange({
      target: {
        label: this.props.label,
        value: value
      }
    });
  },

  render: function () {
    var attribute = this.props.attribute;
    var styles = this.getStyles();

    return (
      <div className="row">
        <legend>
          {attribute.displayName || this.props.label}
        </legend>
        <input type="checkbox" checked={this.props.value} onChange={this.onChange} />
        <p className="help-text">
          {attribute.description}
        </p>
      </div>
    );
  }

});
