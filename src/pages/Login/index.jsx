import React from "react";
import { Helmet } from "react-helmet";
import Form from "../../components/Form";

const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>

      <Form />
    </>
  );
};

export default index;
