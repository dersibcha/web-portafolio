import React from "react";
import Head from "next/head";
import Navbar from "./navbar.component";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Derian's web portafolio </title>
        <meta name="description" content="Derian's personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;