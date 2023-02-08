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

function Contacts() {
  console.log("albina, hello!");
  return (
    <>
      <div className="menu_block_head6">
        <div>
          <h1 className="contacts">Contacts</h1>
        </div>
        <div>
          <p>
            Want to know more or just chat? <br />
            You are welcome!
          </p>
        </div>
        <div className="socialMedia">
          <div>
            <img src={ins} alt={"ins"} />
          </div>
          <div>
            <img src={inst} alt={"inst"} />
          </div>
          <div>
            <img src={be} alt={"be"} />
          </div>
          <div>
            <img src={bool} alt={"bool"} />
          </div>
        </div>
        <div>
          <p className="text_lmon">
            Like me on <br />
            LinkedIn, Instagram, Behance, Dribble
          </p>
        </div>
      </div>
          </>
  );
}

export default Contacts;
