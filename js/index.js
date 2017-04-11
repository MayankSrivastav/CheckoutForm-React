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

var WorkspaceInformation = React.createClass({
  displayName: 'WorkspaceInformation',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'WorkspaceInformation' },
      React.createElement(
        'div',
        { className: 'WorkspaceName' },
        this.props.name
      ),
      React.createElement(
        'div',
        { className: 'WorkspacePrice' },
        React.createElement(
          'div',
          { className: 'Price' },
          this.props.price
        ),
        React.createElement(
          'div',
          { className: 'Duration' },
          ' / ',
          this.props.duration
        )
      )
    );
  }
});
