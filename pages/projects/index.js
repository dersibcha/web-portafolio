import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../../components/layout.component";

const Projects = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <h1>Projects</h1>
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

export default Projects;
