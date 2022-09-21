import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../../components/layout.component";
import ProjectsPage from "../../components/projects.page.component";

const Projects = ({ data }) => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <ProjectsPage data={data} />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  try {
    const res = await fetch(process.env.API_URL + "/github/repos");
    const data = await res.json();
    if (data) {
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common"])), //['common', 'other'] if more files are needed
          // Will be passed to the page component as props
          data,
        },
      };
    } else {
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common"])), //['common', 'other'] if more files are needed
          // Will be passed to the page component as props
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export default Projects;
