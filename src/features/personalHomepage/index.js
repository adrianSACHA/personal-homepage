import { Container } from "../common/Container/styled";
import Footer from "../App/features/Footer";
import Header from "../common/Header";
import Section from "../common/Section";
import About from "../App/features/About";
import Portfolio from "../App/features/Portfolio";
import Skills from "../App/features/Skills";
import FutureSkills from "../App/features/FutureSkills";

function App() {
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

export default App;
