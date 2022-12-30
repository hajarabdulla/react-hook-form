import { Button } from "../../components/Button";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Products from "../../components/products";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>

      <Button>Click me</Button>
      <Button as="a" href="/login" buttonColor="black">
        Click me to go to Login page
      </Button>
      <Products />
    </HelmetProvider>
  );
};

export default Home;
