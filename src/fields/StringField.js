var React = require('react');

module.exports = React.createClass({
  displayName: 'StringField',

  propTypes: {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      value: ''
    }
  },

  onChange: function(e){
    var value = e.target.value;

    this.props.onChange({
      target: {
        label: this.props.label,
        value: value
      }
    });
  },

  render: function () {
    var attribute = this.props.attribute;

    return (
      <div className="row">
        <label>
          {attribute.displayName || this.props.label}
          <input
            type="text"
            value={this.props.value}
            placeholder={attribute.placeholder}
            onChange={this.onChange} />
        </label>
        <p className="help-text">
          {attribute.description}
        </p>
      </div>
    );
  }
});
