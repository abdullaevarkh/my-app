import qwerty from "../icons/qwerty.jpg";
import "../App.css";

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
