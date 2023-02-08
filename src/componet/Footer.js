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

function App() {
  console.log("albina, hello!");
  return (
    <>
    <Header/>

      <div className="content_img">
        <img src={qwerty} alt={"qwerty"} />
      </div>
      <div className="menu_block_head3">
        <div className="content_text_th">
          <h4 className="aboutme">About me</h4>
          <div>
            <p>
              Hi, I'm Denis – UX/UI designer from Minsk. <br />
              I'm interested in design and everything connected with it.
            </p>
            <p>
              I'm studying at courses "Web and mobile <br />
              design interfaces" in IT-Academy.
            </p>
            <p>
              Ready to implement excellent projects <br />
              with wonderful people.
            </p>
          </div>
        </div>
      </div>
      <div className="menu_block_head4">
        <h4 className="skills">Skills</h4>
      </div>
      <div className="menu_block_head5">
        <div>
          <h1 className="portfolio">Portfolio</h1>
        </div>
        <div className="content_img2">
          <img src={sloy} alt={"sloy"} />
        </div>
        <div className="margig-top48">
          <a href="fashion_storage_hp" className="fashion_storage_hp">
            Fashion store - Homepage
          </a>
        </div>
        <div className="content_img3">
          <img src={reebok_web} alt={"reebook_web"} />
        </div>
        <div className="margig-top48">
          <a href="rs_concept" className="rs_concept">
            Reebok Store - Concept
          </a>
        </div>
        <div className="content_img4">
          <img src={reebok_w} alt={"reebook_w"} />
        </div>
        <div className="margig-top48">
          <a href="blp_concept" className="blp_concept">
            Braun Loading Page - Concept
          </a>
        </div>
      </div>
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

export default App;
