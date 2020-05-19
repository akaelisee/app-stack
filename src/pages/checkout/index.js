import React from 'react'
import {loadStripe} from '@stripe/stripe-js';

const Index = () => {
    const stripePromise = loadStripe('pk_test_jlb9tk9GREK2DTjxOJs5qvtg00pTyMYX6P');

    const checkoutButton = async (e) => {
        e.preventDefault();
        const stripe = await stripePromise;
        stripe
        .redirectToCheckout({
            lineItems: [{price: 'price_HJAk2NWs2bRhLG', quantity: 1}],
            mode: 'subscription',
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled',
          })
          .then(function(result) {
            if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                var displayError = document.getElementById('error-message');
                displayError.textContent = result.error.message;
              }
          });

    }
    return (
        <div>
            <button onClick={checkoutButton}>
                payer
            </button>
        </div>
    )
}

export default Index
