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

var OrderSummary = React.createClass({
  displayName: 'OrderSummary',
  render: function render() {
    var _props = this.props;
    var duration = _props.duration;
    var discount = _props.discount;
    var tax = _props.tax;
    var price = _props.price;

    console.log(duration + '' + discount + '' + tax + '' + price);
    var thisDuration = duration > 1 ? duration + ' days' : duration + ' day';
    var initialTotal = duration * price;
    var thisDiscount = Math.floor(initialTotal / 100 * discount);
    var subTotal = initialTotal - discount;
    var thisTax = Math.floor(subTotal / 100 * tax);
    var total = subTotal + thisTax;

    return React.createElement(
      'div',
      { className: 'OrderSummary' },
      React.createElement(
        'div',
        { className: 'Title' },
        'Order Summary'
      ),
      React.createElement(
        'table',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            price,
            ' x ',
            thisDuration
          ),
          React.createElement(
            'td',
            null,
            initialTotal,
            ' INR'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Discount'
          ),
          React.createElement(
            'td',
            null,
            thisDiscount,
            ' INR'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Subtotal'
          ),
          React.createElement(
            'td',
            null,
            subTotal,
            ' INR'
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'Tax'
          ),
          React.createElement(
            'td',
            null,
            thisTax,
            ' INR'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'Total' },
        React.createElement(
          'div',
          { className: 'TotalLabel' },
          'Total'
        ),
        React.createElement(
          'div',
          { className: 'Amount' },
          total,
          ' GBP'
        )
      )
    );
  }
});

var PaymentForm = React.createClass({
  displayName: 'PaymentForm',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'PaymentForm' },
      React.createElement(
        'form',
        { onSubmit: this.props.onSubmit },
        React.createElement(
          'div',
          { className: 'Title' },
          'Payment Information'
        ),
        React.createElement(BasicInput, { name: 'name', label: 'NAME ON CREDIT CARD', type: 'text', placeholder: 'Mayank Srivastav' }),
        React.createElement(BasicInput, { name: 'card', label: 'CREDIT CARD NUMBER', type: 'number', placeholder: '0000 0000 0000 0000' }),
        React.createElement(ExpiryDate, null),
        React.createElement(CheckoutButton, null)
      )
    );
  }
});

var CheckoutButton = React.createClass({
  displayName: 'CheckoutButton',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'CheckoutButton' },
      React.createElement(
        'button',
        null,
        'Book Securely'
      ),
      React.createElement(
        'span',
        null,
        React.createElement('i', { className: 'fa fa-fw fa-lock' }),
        ' Your credit card information is encrypted'
      )
    );
  }
});