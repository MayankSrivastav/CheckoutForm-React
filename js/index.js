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

var ExpiryDate = React.createClass({
  displayName: 'ExpiryDate',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'ExpiryDate' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          null,
          'EXPIRES ON'
        ),
        React.createElement(
          'div',
          { className: 'Expiry' },
          React.createElement(
            'select',
            null,
            React.createElement(
              'option',
              { value: '' },
              'January'
            ),
            React.createElement(
              'option',
              { value: '' },
              'February'
            ),
            React.createElement(
              'option',
              { value: '' },
              'March'
            ),
            React.createElement(
              'option',
              { value: '' },
              'April'
            ),
            React.createElement(
              'option',
              { value: '' },
              'May'
            ),
            React.createElement(
              'option',
              { value: '' },
              'June'
            ),
            React.createElement(
              'option',
              { value: '' },
              'July'
            ),
            React.createElement(
              'option',
              { value: '' },
              'August'
            ),
            React.createElement(
              'option',
              { value: '' },
              'September'
            ),
            React.createElement(
              'option',
              { value: '' },
              'October'
            ),
            React.createElement(
              'option',
              { value: '' },
              'November'
            ),
            React.createElement(
              'option',
              { value: '' },
              'December'
            )
          ),
          React.createElement(
            'select',
            { name: '', id: '' },
            React.createElement(
              'option',
              { value: '' },
              '2016'
            ),
            React.createElement(
              'option',
              { value: '' },
              '2017'
            ),
            React.createElement(
              'option',
              { value: '' },
              '2018'
            ),
            React.createElement(
              'option',
              { value: '' },
              '2019'
            ),
            React.createElement(
              'option',
              { value: '' },
              '2020'
            ),
            React.createElement(
              'option',
              { value: '' },
              '2021'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'CVCField' },
        React.createElement(
          'label',
          null,
          'CVC'
        ),
        React.createElement('input', { type: 'number', placeholder: '000' })
      )
    );
  }
});

var BasicInput = React.createClass({
  displayName: 'BasicInput',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'BasicInput' },
      React.createElement(
        'label',
        { 'for': this.props.name },
        this.props.label,
        ' '
      ),
      React.createElement('input', { id: this.props.name, type: this.props.type, placeholder: this.props.placeholder })
    );
  }
});

var Checkout = React.createClass({
  displayName: 'Checkout',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'Checkout' },
      React.createElement(OrderSummary, { discount: this.props.discount, tax: this.props.tax, price: this.props.price, duration: this.props.duration }),
      React.createElement(PaymentForm, { onSubmit: this.props.onSubmit })
    );
  }
});

var Header = React.createClass({
  displayName: 'Header',
  render: function render() {
    return React.createElement(
      'header',
      null,
      React.createElement('input', { onChange: this.props.onChange, type: 'range', max: '100', min: '1', step: '1' })
    );
  }
});

var App = React.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    return {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    };
  },
  componentDidMount: function componentDidMount() {
    this.setState({
      mounted: true
    });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
  },
  handleChange: function handleChange(e) {
    this.setState({
      duration: e.target.value
    });
  },
  render: function render() {
    var overlay = undefined,
        container = undefined;
    if (this.state.mounted) {
      overlay = React.createElement(Overlay, { image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg' });
      container = React.createElement(
        Container,
        null,
        React.createElement(ImagePreview, { price: this.state.price, duration: this.state.duration, people: this.state.people, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg' }),
        React.createElement(Checkout, { discount: this.state.discount, tax: this.state.tax, price: this.state.price, duration: this.state.duration, onSubmit: this.handleSubmit })
      );
    }
    return React.createElement(
      'div',
      { className: 'App' },
      overlay,
      container,
      React.createElement(Header, { onChange: this.handleChange })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));