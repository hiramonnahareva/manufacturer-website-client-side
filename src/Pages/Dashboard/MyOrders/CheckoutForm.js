import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
  const elements = useElements();
  const stripe = useStripe();
  const [cardError, setCardError] = useState('');
  const [success, setsuccess] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  console.log(order)
  const {customer, price, email} = order;
  useEffect(() => {
    if (price) {
      fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({price}),
      })
        .then(res => res.json())
        .then(data => {
          if (data.clientSecret){
            setClientSecret(data.clientSecret);
          }
          // console.log(data)
        })
    }
  }, [price])
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return 
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    setsuccess('');
    if (error) {
      setCardError(error.message)
    }
    else {
      setCardError('')
    }
    const {paymentIntent, error: intendError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customer,
            email: email,
          },
        },
      },
    );
    if(intendError){
      setCardError(intendError?.message);
      setsuccess('')
    }
    else{
      setCardError('')
      setsuccess('Congatulation you are successfully payed');
    }
    
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm my-5' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-error'>{cardError}</p>
      }
    </>
  );
};

export default CheckoutForm;