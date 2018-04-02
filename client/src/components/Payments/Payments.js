import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <StripeCheckout
        amount={500}
        name='Emaily'
        description='5 dolars for 5 email credits'
        token={token => this.props.addCredits(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn' >Add credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
