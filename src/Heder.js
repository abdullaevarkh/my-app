import qwerty from "./qwerty.jpg";
import sloy from "./sloy.png";
import reebok_web from "./reebok_web.png";
import reebok_w from "./reebok_w.png";
import ins from "./ins.png";
import inst from "./inst.png";
import be from "./be.png";
import bool from "./bool.png";
import "./App.css";

function Header() {
  console.log("albina, hello!");
  return (
    <>
      <div className="menu_block_head">
        <div className="menu_block">
          <a href="home" className="menu_links">
            Home
          </a>
          <a href="about_me" className="menu_links">
            About me
          </a>
          <a href="skills" className="menu_links">
            Skills
          </a>
          <a href="portfolio" className="menu_links">
            Portfolio
          </a>
          <a href="contacts" className="menu_links">
            Contacts
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
