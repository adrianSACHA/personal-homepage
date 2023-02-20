import { Container } from "./Container/styled";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import MainInformation from "./MainInformation";
import { Portfolio } from "./Portfolio";
import Skills from "./Skills";
import { ThemeSwitcher } from "../../common/ThemeSwitcher";
import { skills, futureSkills } from "./skillsData";

export const Homepage = () => {
  return (
    <Container>
      <Header title={<ThemeSwitcher />} content={<MainInformation />} />
      <Section
        title="My Skill set includes 🛠️"
        body={<Skills skills={skills} />}
      />
      <Section
        title="What I want to learn next 🚀"
        body={<Skills skills={futureSkills} />}
      />
      <Portfolio />
      <Footer />
    </Container>
  );
};

export default Homepage;
