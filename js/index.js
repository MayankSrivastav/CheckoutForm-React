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

var WorkspaceMeta = React.createClass({
  displayName: 'WorkspaceMeta',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'WorkspaceMeta' },
      React.createElement(
        'div',
        { className: 'Description' },
        'Entire office for ',
        React.createElement(
          'strong',
          null,
          this.props.people
        )
      ),
      React.createElement(
        'div',
        { className: 'Dates' },
        React.createElement(
          'strong',
          null,
          'Tue, Apr 4'
        )
      )
    );
  }
});

var ImagePreview = React.createClass({
  displayName: 'ImagePreview',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'ImagePreview', style: { 'backgroundImage': 'url(' + this.props.image + ')' } },
      React.createElement(
        'div',
        { className: 'WorkspaceOverview' },
        React.createElement(WorkspaceInformation, { name: 'Coworking Space, South Korea', price: this.props.price, duration: '1' }),
        React.createElement(WorkspaceMeta, { people: this.props.people })
      )
    );
  }
});