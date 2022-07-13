import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navbar from "../../components/navbar.component";

const Projects = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <main>
        <Navbar />
      </main>
      <h1>Contact</h1>
      <footer></footer>
    </div>
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
