import React from "react";
import Head from "next/head";
import Navbar from "./navbar.component";
import Footer from "./footer.component";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Derian&apos; web portafolio </title>
        <meta name="description" content="Derian's personal page" />
        <link rel="icon" href="/dicon.png" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
