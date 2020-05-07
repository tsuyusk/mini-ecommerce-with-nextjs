import React from "react";
import Stripe from "stripe";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import CheckoutButton from "../components/checkoutButton";
import stripeConfig from "../config/stripe";

interface Props {
  sku: Stripe.Sku;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02'
  });

  const skus = await stripe.skus.list();

  const paths = skus.data.map(sku => ({
    params: {
      skuId: sku.id,
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
  apiVersion: '2020-03-02'
  });

  const { skuId } = params;

  const sku = await stripe.skus.retrieve(skuId as string);

  return {
    props: {
      sku,
    }
  }
}

const ProductPage: React.FC<Props> = ({ sku }) => {
  return (
    <div>
      <h1>{sku.attributes.name}</h1>

      {sku.image && <img src={sku.image} style={{width: 100}}/>}

      <h2>{(sku.price / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: sku.currency.toUpperCase()
      })}</h2>
      <CheckoutButton skuId={sku.id} itemName={sku.attributes.name} />

      <br />
      <br />
      
      <Link href="/">Go back</Link>
    </div>
  )
}

export default ProductPage;