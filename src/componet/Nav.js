import sloy from "../icons/sloy.png";
import reebok_web from "../icons/reebok_web.png";
import reebok_w from "../icons/reebok_w.png";
import "../App.css";


function Nav() {
  console.log("albina, hello!");
  return (
    <>
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
          </>
  );
}

export default Nav;
