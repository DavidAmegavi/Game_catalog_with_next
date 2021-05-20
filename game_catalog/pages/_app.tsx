import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
