import { Container } from "./common/Container/styled";
import Footer from "./features/Footer";
import Header from "./common/Header";
import Section from "./common/Section";
import About from "./features/About";
import Portfolio from "./features/Portfolio";


function App() {
  return (
    <Container>
      <Header title="Personal HOMEPAGE! - 🚧🚧UnderConstruction 🚧🚧" content={<About />} />
      <Section title="My Skill set includes 🛠️" body="React" />
      <Section title="What I want to learn next 🚀" body="Typescript" />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
