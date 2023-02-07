import { Container } from "../../common/Container/styled";
import Footer from "../../features/personalHomepage/Footer";
import Header from "../../common/Header";
import Section from "../../common/Section";
import About from "../../features/personalHomepage//About";
import Portfolio from "../../features/personalHomepage/Portfolio";
import Skills from "../../features/personalHomepage/Skills";
import FutureSkills from "../../features/personalHomepage/FutureSkills";

export const Homepage = () => {
  return (
    <Container>
      <Header content={<About />} />
      <Section title="My Skill set includes 🛠️" body={<Skills />} />
      <Section title="What I want to learn next 🚀" body={<FutureSkills />} />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default Homepage;
