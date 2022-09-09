import React from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/layout.component";
import CallToAction from "../components/call-to-action.component";
import Skills from "../components/skills.component";

const Home = () => {
  //console.log("env: " + JSON.stringify(getEnvVariables()));
  const { t } = useTranslation("common");
  return (
    <Layout>
      <CallToAction />
      <Skills />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), //['common', 'other'] if more files are needed
      // Will be passed to the page component as props
    },
  };
}

export default Home;
