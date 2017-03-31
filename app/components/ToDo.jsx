var React = require('react');

var ToDo = React.createClass({
  render: function (){
    var {text, id} = this.props;

    return (
      <div>
        {id}. {text}
      </div>
    );
  }
});

module.exports = ToDo;
