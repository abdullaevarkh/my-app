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

function MenImg() {
  console.log("albina, hello!");
  return (
    <>
      <div className="content_img">
        <img src={qwerty} alt={"qwerty"} />
      </div>
    </>
  );
}

export default MenImg;
