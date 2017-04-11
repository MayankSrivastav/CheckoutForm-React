'use strict';

var Overlay = React.createClass({
  displayName: 'Overlay',
  render: function render() {
    return React.createElement('div', { className: 'Overlay', style: { 'backgroundImage': 'url(' + this.props.image + ')' } });
  }
});

var Container = React.createClass({
  displayName: 'Container',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'Container' },
      this.props.children
    );
  }
});