import qwerty from "./qwerty.jpg";
import sloy from "./sloy.png";
import reebok_web from "./reebok_web.png";
import reebok_w from "./reebok_w.png";
import ins from "./ins.png";
import inst from "./inst.png";
import be from "./be.png";
import bool from "./bool.png";
import "./App.css";
import Header from "./Heder";
import BodyNameMen from "./BodyNameMen";
import MenImg from "./MenImg";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Nav from "./Nav";
import Contacts from "./Contacts";

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
