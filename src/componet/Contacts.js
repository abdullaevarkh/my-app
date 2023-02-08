
import ins from "../icons/ins.png";
import inst from "../icons/inst.png";
import be from "../icons/be.png";
import bool from "../icons/bool.png";
import "../App.css";


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
