import React from "react";
import stripeConfig from "../config/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  skus: Stripe.Sku[],
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02'
  });

  const skus = await stripe.skus.list();
  
  return {
    props: {
      skus: skus.data
    }
  }
}


const HomePage: React.FC<Props> = ({ skus }) => {
  return (
    <>
      <h1>Simple store</h1>

      <hr />

      {skus.map(sku => (
        <div key={sku.id}>
          <h1>{sku.attributes.name}</h1>

          {sku.image && <img src={sku.image} style={{width: 50}} />}

          <h2>{(sku.price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: sku.currency
          })}</h2>
          <Link href={"/" + sku.id}>Visit product</Link>
          <hr />
        </div>
      ))}
    </>
  )
}

export default HomePage;