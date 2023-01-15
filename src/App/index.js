import { Container } from "./common/Container/styled";
import Footer from "./features/Footer";
import Header from "./common/Header";
import Section from "./common/Section";
import About from "./features/About";
import Portfolio from "./features/Portfolio";
import Skills from "./features/Skills";



function App() {
  return (
    <Container>
      <Header content={<About />} />
      <Section title="My Skill set includes 🛠️" body={<Skills />} />
      <Section title="What I want to learn next 🚀" body="Typescript" />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
