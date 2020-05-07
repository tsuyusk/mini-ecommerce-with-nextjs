import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SucessPage: React.FC = () => {

  const { query: {itemName} } = useRouter()


  return (
    <>
      <h1>Thank you for buying {itemName}</h1>

      <Link href="/">Go back to homepage</Link>
    </>
  )
};

export default SucessPage;