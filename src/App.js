import "./App.css";
import Header from "./componet/Heder";
import BodyNameMen from "./componet/BodyNameMen";
import MenImg from "./componet/MenImg";
import AboutMe from "./componet/AboutMe";
import Skills from "./componet/Skills";
import Nav from "./componet/Nav";
import Contacts from "./componet/Contacts";

function App() {
  console.log("albina, hello!");
  return (
    <>
      <Header />
      <BodyNameMen />
      <MenImg />
      <AboutMe />
      <Skills />
      <Nav/>
      <Contacts/>
    </>
  );
}

export default App;
