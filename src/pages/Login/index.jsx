import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Form from "../../components/Form";

const index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>

      <Form />
    </HelmetProvider>
  );
};

export default index;
