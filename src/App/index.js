import "./App.css";
import { Container } from "./Common/Container/styled";
import Footer from "./features/Footer";
import Header from "./Common/Header";
import Section from "./Common/Section";


function App() {
  return (
    <Container>
      <Header title="Personal HOMEPAGE! - 🚧🚧UnderConstruction 🚧🚧" />
      <Section title="My Skill set includes" body="React" />

      <Section title="What I want to learn next" body="Typescript" />

      <Footer />
    </Container>
  );
}

export default App;
