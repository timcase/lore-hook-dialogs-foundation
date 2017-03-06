var React = require('react');

module.exports = React.createClass({
  displayName: 'NumberField',

  propTypes: {
    attribute: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      value: 0
    }
  },

  onChange: function(e){
    var value = Number(e.target.value);

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
            type="number"
            value={this.props.value}
            onChange={this.onChange} />
        </label>
        <p className="help-text">
          {attribute.description}
        </p>
      </div>
    );
  }
});
