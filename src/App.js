import "./App.css";
import { Container } from "./App/Container/styled";
import Footer from "./App/features/Footer";
import Header from "./App/Header";
import Section from "./App/Section";


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
