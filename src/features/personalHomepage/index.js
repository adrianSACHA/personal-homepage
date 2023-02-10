import { Container } from "./Container/styled";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import FutureSkills from "./FutureSkills";
import { ThemeSwitcher } from "../../common/ThemeSwitcher";

export const Homepage = () => {
  return (
    <Container>
      <Header title={<ThemeSwitcher />} content={<About />} />
      <Section title="My Skill set includes 🛠️" body={<Skills />} />
      <Section title="What I want to learn next 🚀" body={<FutureSkills />} />
      <Portfolio />
      <Footer />
    </Container>
  );
};

export default Homepage;