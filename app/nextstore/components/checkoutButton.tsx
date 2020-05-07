import React from "react";
import { loadStripe } from "@stripe/stripe-js";

import stripeConfig from "../config/stripe";
import Stripe from "stripe";

const stripePromise = loadStripe(stripeConfig.publicKey);

interface Props {
  skuId: string;
  itemName: string;
}

const CheckoutButton: React.FC<Props> = ({ skuId, itemName,  }) => {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      items: [
        {sku: skuId, quantity: 1}
      ],
      successUrl: `https://3000-b0fafa9a-14ad-4a54-9b24-7a703d59eb11.ws-us02.gitpod.io/sucess?itemName=${itemName}`,
      cancelUrl: `https://3000-b0fafa9a-14ad-4a54-9b24-7a703d59eb11.ws-us02.gitpod.io/cancel`,
    })
    if(error) console.log(error);
  }
  return (
    <button onClick={handleClick}>
      Buy
    </button>
  )
}

export default CheckoutButton;